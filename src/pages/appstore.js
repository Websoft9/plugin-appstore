// @flow
import AddIcon from '@mui/icons-material/Add';
import MuiAlert from '@mui/material/Alert';
import MuiButton from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import cockpit from 'cockpit';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Carousel, Col, Form, Modal, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from "react-router-dom";
import DefaultImg from '../assets/images/default.png';
import FormInput from '../components/FormInput';

const _ = cockpit.gettext;
const language = cockpit.language;//获取cockpit的当前语言环境
let protocol = window.location.protocol;
let host = window.location.host;
const baseURL = protocol + "//" + (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(host) ? host.split(":")[0] : host);
const rootURL = (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(host) ? host.split(":")[0] : host);

// 获取Api Key
const getApiKey = async () => {
    try {
        var script = "docker exec -i websoft9-apphub apphub getconfig --section api_key --key key";
        const api_key = (await cockpit.spawn(["/bin/bash", "-c", script])).trim();
        if (!api_key) {
            return <p>Error: Api key is empty </p>;
        }
        return api_key
    }
    catch (error) {
        console.log(error);
    }
}

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

//应用详情弹窗
const AppDetailModal = ({ product, showFlag, onClose }) => {
    const [index, setIndex] = useState(0); //用户图片浏览
    const navigate = useNavigate(); //用于页面跳转
    const [visible, setVisible] = useState(true); //用于显示安装选项：版本和应用名称
    const [customName, setCustomName] = useState(""); //用户存储用户输入的应用名称
    const [showAlert, setShowAlert] = useState(false); //用于是否显示错误提示
    const [alertMessage, setAlertMessage] = useState("");//用于显示错误提示消息
    const [disable, setDisable] = useState(false);//用于按钮禁用
    const [domain, setDomain] = useState("");//用于存储泛域名
    const [enabled, setEnabled] = useState(true);// 使用 useState 钩子来定义一个 state，表示文本框是否启用
    const [hasCreacteDomain, setHasCreacteDomain] = useState(false);//是否创建自定义域名
    const [customDomain, setCustomDomain] = useState("");//自定义域名
    const [installing, setInstalling] = useState(false);//是否正在安装
    const [installSuccess, setInstallSuccess] = useState(false);//是否安装成功

    // 定义一个函数，当用户点击开关时，改变 state 的值
    const handleToggle = () => {
        setEnabled(!enabled);
    };

    const handleAddClick = () => {
        // 如果没有创建 FormInput 组件，就设置 state 变量为 true，并创建 FormInput 组件
        if (!hasCreacteDomain) {
            setHasCreacteDomain(true);
        }
    };

    const handleDelClick = () => {  // 删除 FormInput 组件
        setHasCreacteDomain(false);
        setCustomDomain("");
    }

    const handleSetClick = () => {
        let url = `settings`;
        cockpit.file('/etc/hostname').watch(content => {
            console.log(content);
        });
        cockpit.jump(url);
    }

    // 获取泛域名
    const getWildcardDomain = async () => {
        try {
            var script = "docker exec -i websoft9-apphub apphub getconfig --section domain --key wildcard_domain";
            const wildcard_domain = (await cockpit.spawn(["/bin/bash", "-c", script])).trim();
            return wildcard_domain;
        }
        catch (error) {
            console.log(error);
        }
    }
    //用户单击“安装”按钮
    async function handleInstallClick() {
        if (!visible) {
            setInstalling(true);
            if (!customName || customName.length < 2 || customName.length > 20 || /^\d/.test(customName)) { //判断用户是否输入应用名称
                setShowAlert(true);
                setAlertMessage(_("Please enter a custom application name between 2 and 20 characters.Cannot start with a number."))
                setInstalling(false);
            }
            else if (hasCreacteDomain && !customDomain) {
                setShowAlert(true);
                setAlertMessage(_("Please enter a custom domain name."))
                setInstalling(false);
            }
            else {
                try {
                    setDisable(true);

                    let req_body = {
                        "app_name": product.key,
                        "edition": {
                            "dist": "community",
                            "version": selectedVersion
                        },
                        "app_id": customName.trim(),
                        "proxy_enabled": ((domain && enabled) || hasCreacteDomain) ? true : false,
                        "domain_names": (hasCreacteDomain && enabled && domain) ? [customDomain.trim(), customName.trim() + "." + domain] :
                            hasCreacteDomain ? [customDomain.trim()] : (domain && enabled) ? [customName.trim() + "." + domain] : [rootURL],
                    };

                    cockpit.http({
                        "address": "websoft9-apphub",
                        "port": 8080,
                        "headers": {
                            'api_key': await getApiKey()
                        }
                    }).request({
                        path: `/apps/install`,
                        method: "POST",
                        body: JSON.stringify(req_body)
                    }).then(function (response) {
                        setDisable(false);
                        setInstalling(false);
                        setInstallSuccess(true);
                    }).catch(function (error, data) {
                        setDisable(false);
                        setInstalling(false);
                        setShowAlert(true);
                        if (data) {
                            try {
                                data = JSON.parse(data);
                                setAlertMessage(data?.details);
                            }
                            catch (error) {
                                setAlertMessage(data);
                            }
                        }
                        else {
                            setAlertMessage(error.message);
                        }
                    });
                }
                catch (error) {
                    setShowAlert(false);
                    setAlertMessage("");
                    navigate("/error-500");
                }
            }
            return;
        }
        setVisible(!visible);
    }

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    let versions = (product.distribution?.filter(item => item.key === "Community") || []).map(version => { return version.value });//获取应用的版本

    let versionList = (versions && versions.length === 1) ? versions.toString().split(",") : versions;

    const [selectedVersion, setselectedVersion] = useState(versionList[0]); //存储用户选择的安装版本

    const imagName = product?.logo?.imageurl?.split("/").pop(); //获取图片名称

    const changeVersion = (version) => {
        setselectedVersion(version);
    };

    const handleInputChange = (inputValue) => {
        setCustomName(inputValue);
        if (!inputValue) { //验证输入应用名称
            setShowAlert(true);
            setAlertMessage(_("Please enter a custom application name between 2 and 20 characters.Cannot start with a number."))
        }
        else {
            const newValue = inputValue.replace(/[^a-z0-9]/gi, '').toLowerCase(); //先替换输入值
            setCustomName(newValue);
            setShowAlert(false);
            setAlertMessage("");
        }
    }

    const handleDomainInputChange = (inputValue) => {
        setCustomDomain(inputValue);
        if (!inputValue) {
            setShowAlert(true);
            setAlertMessage(_("Please enter a custom domain name."));
        }
        else {
            setCustomDomain(inputValue);
            setShowAlert(false);
            setAlertMessage("");
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowAlert(false);
        setAlertMessage("");
    };

    const handleDialogClose = () => {
        setInstallSuccess(false);
    };

    useEffect(() => {
        async function fetchDomain() {
            const result = await getWildcardDomain();
            setDomain(result);
        }

        fetchDomain();
    }, []);

    return (
        <>
            <Modal show={showFlag} onHide={onClose} size="lg" scrollable="true" backdrop="static">
                {
                    installSuccess &&
                    <div className="card-disabled" style={{ zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Stack sx={{ width: '50%' }} spacing={2}>
                            <MuiAlert variant="filled" severity="success" action={
                                <MuiButton color="inherit" size="small" onClick={() => {
                                    let url = `myapps`;
                                    cockpit.file('/etc/hostname').watch(content => {
                                        console.log(content);
                                    });
                                    cockpit.jump(url);
                                    onClose();
                                }
                                }>
                                    {_("Done")}
                                </MuiButton>
                            }>
                                {/* <AlertTitle>{_("Success")}</AlertTitle> */}
                                {_("Installation succeeded")}
                            </MuiAlert>
                        </Stack>
                    </div >
                }
                {
                    installing && (
                        <div className="card-disabled" style={{ zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Spinner className='dis_mid' />
                            <div style={{ marginTop: '10px' }}>
                                <span className="sr-only" style={{ fontSize: "18px" }}>{_("Installing...")}</span>
                            </div>
                        </div>
                    )
                }
                <Modal.Header onHide={onClose} closeButton>
                    <div style={{ padding: "10px" }}>
                        <div className='appstore-item-content-icon col-same-height'>
                            <img
                                src={`${baseURL}/media/logos/${imagName}`}
                                alt=""
                                className="app-icon"
                                onError={(e) => (e.target.src = DefaultImg)}
                            />
                        </div>
                        <div className='col-same-height'>
                            <h4 className="appstore-item-content-title" style={{ marginTop: "5px" }}>
                                {product.trademark}
                            </h4>
                            <div>
                                <a rel="noreferrer" href={`https://support.websoft9.com/docs/` + product.key} target="_blank" style={{ color: '#2196f3' }} >{product.trademark} {_("developers")}</a>
                            </div>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <span style={{ marginRight: "5px" }}>{_("Version")} : </span> {versions}
                            </div>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <span style={{ marginRight: "5px" }}>{_("Requires at least")} : {product.vcpu} vCPU,  {product.memory}  GB memory, {product.storage} GB storage</span>
                            </div>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ display: visible ? "block" : "none" }}>
                        <Carousel activeIndex={index} onSelect={handleSelect} style={{ width: "80%", margin: "0 auto" }}>
                            {
                                (product.screenshots || []).map((item) => {
                                    const filename = item.value.split("/").pop();
                                    return (
                                        <Carousel.Item key={item?.id} >
                                            <img
                                                className="d-block"
                                                src={`${baseURL}/media/screenshots/${language === "zh_CN" ? "zh" : "en"}/${filename}`}
                                                alt={item?.key}
                                                width="100%"
                                                height="300px"
                                            />
                                        </Carousel.Item>
                                    );
                                })
                            }
                        </Carousel>
                        <div style={{ padding: "10px" }}>
                            <h4>{_("Overview")}</h4>
                            {product.overview}
                        </div>
                        <div style={{ padding: "10px" }}>
                            <h4>{_("Description")}</h4>
                            {product.description}
                        </div>
                    </div>
                    <div style={{ display: visible ? "none" : "block" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div>
                                <span style={{ marginRight: "5px" }}>{_("Version")} :</span>
                                {
                                    versionList && <FormInput
                                        name="select"
                                        type="select"
                                        className="form-select"
                                        onChange={(e) => changeVersion(e.target.value)}
                                        key="select">
                                        {
                                            (versionList || []).map((version, i) => {
                                                return <option value={version} key={version + i}>{version}</option>
                                            })
                                        }
                                    </FormInput>
                                }
                            </div>
                            <div style={{ marginTop: "5px" }}>
                                <Form.Group as={Row}>
                                    <span style={{ marginRight: "5px" }}>{_("Name")} :</span>
                                    <Col sm={8} style={{ paddingRight: 0 }}>
                                        <FormInput type="text" value={customName} name="app_Name"
                                            placeholder={_("Only letters and numbers from 2 to 20 are allowed. No special characters.")}
                                            onChange={(e) => { handleInputChange(e.target.value) }} />
                                    </Col>
                                    {
                                        domain ?
                                            <Col sm={4} style={{ paddingLeft: 0 }}>
                                                <Form>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <div className="input-with-button">
                                                            <Form.Control
                                                                type="text"
                                                                placeholder={"." + domain}
                                                                disabled={!enabled}
                                                                value={"." + domain}
                                                                className={enabled ? "" : "deleted"}
                                                            />
                                                            <Button
                                                                variant={enabled ? "danger" : "success"}
                                                                onClick={handleToggle}
                                                            >
                                                                {enabled ? _("Disable") : _("Enable")}
                                                            </Button>
                                                        </div>
                                                    </Form.Group>
                                                </Form>
                                            </Col>
                                            :
                                            <Col sm={4} className="d-flex justify-content-center">
                                                <Fab size="small" color="primary" aria-label="add" onClick={handleSetClick} variant="extended" >
                                                    <AddIcon />
                                                    <span>{_("Set global domain name")}</span>
                                                </Fab>
                                            </Col>
                                    }
                                </Form.Group>
                                <div style={{ marginTop: '5px' }}>
                                    <Form.Group as={Row}>
                                        {
                                            !hasCreacteDomain &&
                                            <Col sm={2} style={{ paddingRight: 0 }}>
                                                <Fab size="small" color="primary" aria-label="add" onClick={handleAddClick} variant="extended">
                                                    <AddIcon />
                                                    <span>{_("Add Domain")}</span>
                                                </Fab>
                                            </Col>
                                        }
                                        <Col sm={12}>
                                            {
                                                hasCreacteDomain &&
                                                <>
                                                    <span style={{ marginRight: "5px" }}>{_("Domain")} :</span>
                                                    <Form>
                                                        <Form.Group controlId="formBasicEmail">
                                                            <div className="input-with-button">
                                                                <FormInput type="text" name="custom_domain"
                                                                    placeholder={_("Please enter a custom domain name.")}
                                                                    value={customDomain}
                                                                    onChange={(e) => { handleDomainInputChange(e.target.value) }} />
                                                                <Button
                                                                    variant="danger"
                                                                    onClick={handleDelClick}
                                                                >
                                                                    {_("Delete")}
                                                                </Button>
                                                            </div>
                                                        </Form.Group>
                                                    </Form>
                                                </>
                                            }
                                        </Col>
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={onClose}>
                        {_("Close")}
                    </Button>{' '}
                    <Button disabled={disable} variant="primary" onClick={handleInstallClick}>
                        {_("Install")}
                    </Button>
                </Modal.Footer>
            </Modal >
            {
                showAlert &&
                <Snackbar open={showAlert} /*autoHideDuration={5000}*/ onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        {alertMessage}
                    </Alert>
                </Snackbar>
            }

        </>
    );
}


const AppStore = (): React$Element<React$FragmentType> => {
    const [showModal, setShowModal] = useState(false); //用于显示弹窗的标识
    const [selectedProduct, setSelectedProduct] = useState(null); //用于存储被选中的产品（点击应用详情时使用）
    const [subCatalogs, setSubCatalogs] = useState(null); //用于存储二级目录
    const [allMainCatalogApps, setAllMainCatalogApps] = useState(null); //用于存储某个一级子目录下的所有应用
    const [isAllSelected, setIsAllSelected] = useState(true);
    const [searchValue, setSearchValue] = useState("");
    const [mainCatalogs, setMainCatalogs] = useState([]);
    const [apps, setApps] = useState([]); //用于存储通过目录筛选出来的数据
    const [appList, setAppList] = useState([]); //用于存储通过目录筛选出来的数据
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); //用于页面跳转

    const getData = useCallback(async () => {
        setLoading(true);
        cockpit.http({
            "address": "websoft9-apphub",
            "port": 8080,
            "headers": {
                'api_key': await getApiKey()
            }
        }).request({ path: `/apps/catalog/${language === "zh_CN" ? "zh" : "en"}`, method: "GET", body: "" }).then((response) => {
            response = JSON.parse(response);
            const catalogSort = response.sort(function (a, b) {
                if (a.position === null && b.position === null) {
                    return 0;
                } else if (a.position === null) {
                    return 1;
                } else if (b.position === null) {
                    return -1;
                } else {
                    return a.position - b.position;
                }
            });
            setMainCatalogs(catalogSort);
        }).catch((error) => {
            console.log(error);
            return <p>Error: Failed to fetch directory data </p>;
        });

        cockpit.http({
            "address": "websoft9-apphub",
            "port": 8080,
            "headers": {
                'api_key': await getApiKey()
            }
        }).request({ path: `/apps/available/${language === "zh_CN" ? "zh" : "en"}`, method: "GET", body: "" }).then((response) => {
            response = JSON.parse(response);
            setApps(response);
            setAppList(response);
        }).catch((error) => {
            console.log(error);
            return <p>Error: Failed to fetch product data </p>;
        });
        setLoading(false);
    }, [language, getApiKey]);

    useEffect(() => {
        getData();
    }, [getData]);

    if (loading) return <Spinner className='dis_mid' />
    // if (dataError) return <p>Error : ${dataError.message} </p>;

    //用于显示应用详情的弹窗
    const handleClick = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    //用于关闭应用详情的弹窗
    const handleClose = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    //当主目录改变时
    const changeMainCatalog = (selectedMainCatalog) => {
        // 查询主目录下的二级目录
        let updatedData = null;
        //  filter
        updatedData =
            selectedMainCatalog === 'All'
                ? []
                : mainCatalogs.filter(c => c.key === selectedMainCatalog)?.[0]?.linkedFrom?.catalogCollection?.items;
        const data = updatedData.sort(function (a, b) {
            if (a.position === null && b.position === null) {
                return 0;
            } else if (a.position === null) {
                return 1;
            } else if (b.position === null) {
                return -1;
            } else {
                return a.position - b.position;
            }
        });
        setSubCatalogs(data);

        //根据主目录过滤app数据
        let subCatalogApps = null;
        let mainCatalogAllApps = null;
        mainCatalogAllApps = apps.filter(app => app?.catalogCollection?.items.some(sub => sub?.catalogCollection?.items.some(subsub => subsub.key === selectedMainCatalog)));
        subCatalogApps =
            selectedMainCatalog === "All"
                ? apps
                : mainCatalogAllApps;
        setAppList(subCatalogApps);
        setAllMainCatalogApps(mainCatalogAllApps);
        setIsAllSelected(false);
        setSearchValue("");
    };

    //当子目录改变时，过滤应用数据
    const changeSubCatalog = (selectedSubCatalog) => {
        let updatedData = null;
        updatedData =
            selectedSubCatalog === "All"
                ? allMainCatalogApps
                : apps.filter(app => app?.catalogCollection?.items.some(c => c.key === selectedSubCatalog));
        setAppList(updatedData);
        setSearchValue("");
    };

    //当搜索框的内容发生改变时，进行app的过滤搜索
    const handleInputChange = (searchString) => {
        setSearchValue(searchString);
        searchString = searchString.toLowerCase();
        let updatedData = null;
        updatedData =
            searchString === ""
                ? apps
                : apps.filter(app => { return app.trademark.toLowerCase().includes(searchString) || app.key.toLowerCase().includes(searchString) || app.summary.toLowerCase().includes(searchString) });

        setAppList(updatedData);
        setIsAllSelected(true);
        setSubCatalogs(null);
    }

    return (
        <>
            <Row className="mb-2">
                <Col sm={6}>
                    <Form.Group as={Row}>
                        <Col sm={6}>
                            <FormInput
                                name="select1"
                                type="select"
                                className="form-select"
                                key="select1"
                                onChange={(e) => changeMainCatalog(e.target.value)}>
                                <option value="All" selected={isAllSelected}>{_("All")}</option>
                                {
                                    (mainCatalogs || []).map((item, i) => {
                                        return (
                                            <option value={item?.key} key={item?.key + i}>{item?.title}</option>
                                        );
                                    })
                                }
                            </FormInput>
                        </Col>
                        <Col sm={6}>
                            <FormInput
                                name="select2"
                                type="select"
                                className="form-select"
                                key="select2"
                                onChange={(e) => changeSubCatalog(e.target.value)}>
                                <option value="All">{_("All")}</option>
                                {
                                    (subCatalogs || []).map((item, i) => {
                                        return (
                                            <option value={item?.key} key={item?.key + i}>{item?.title}</option>
                                        );
                                    })
                                }
                            </FormInput>
                        </Col>
                    </Form.Group>
                </Col>
                <Col sm={6}>
                    <Col xs="auto">
                        <FormInput type="text" name="search"
                            placeholder={_("Search for apps like WordPress, MySQL, GitLab, …")}
                            value={searchValue}
                            onChange={(e) => handleInputChange(e.target.value)} />
                    </Col>
                </Col>
            </Row>
            <Row>
                {(appList || []).map((app, i) => {
                    const imagName = app?.logo?.imageurl?.split("/").pop();
                    return (
                        <Col xxl={3} sm={6} md={4} key={"app-" + i} className="appstore-item">
                            <div className='appstore-item-content highlight' onClick={() => { handleClick(app) }}>
                                <div className='appstore-item-content-icon col-same-height'>
                                    <img
                                        src={`${baseURL}/media/logos/${imagName}`}
                                        alt={imagName}
                                        className="app-icon"
                                        onError={(e) => (e.target.src = DefaultImg)}
                                    />
                                </div>
                                <div className='col-same-height' style={{ textAlign: "initial" }}>
                                    <h4 className="appstore-item-content-title">
                                        {app?.trademark}
                                    </h4>
                                    <div className='appstore-item-content-tagline text-muted'>
                                        {app?.summary}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    );
                })}
            </Row>
            {showModal && <AppDetailModal product={selectedProduct} showFlag={showModal} onClose={handleClose} />}
        </>
    );
};

export default AppStore;
