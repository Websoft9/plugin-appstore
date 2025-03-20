// @flow
import AddIcon from '@mui/icons-material/Add';
import GitHubIcon from '@mui/icons-material/GitHub';
import MuiAlert from '@mui/material/Alert';
import Chip from '@mui/material/Chip';
import Fab from '@mui/material/Fab';
import Snackbar from '@mui/material/Snackbar';
import cockpit from 'cockpit';
import React, { useEffect, useState } from 'react';
import { Button, Carousel, Col, Form, Modal, Alert as ReactAlert, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import LazyLoad from 'react-lazyload';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from "react-router-dom";
import DefaultImgEn from '../assets/images/default_en.png';
import DefaultImgzh from '../assets/images/default_zh.png';
import FormInput from '../components/FormInput';
import { AppAvailable, AppCatalog, AppInstall, GetSettingsBySection } from '../helpers';

const _ = cockpit.gettext;
const language = cockpit.language;//获取cockpit的当前语言环境
const DefaultImg = language === "zh_CN" ? DefaultImgzh : DefaultImgEn;

var baseURL = ""
const rootURL = `${window.location.hostname}`;

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function HtmlContent({ html }) {
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
}


//应用详情弹窗
const AppDetailModal = ({ product, showFlag, onClose, isFavorite, onFavoriteUpdate, catalogClick }) => {
    const [index, setIndex] = useState(0); //用户图片浏览
    const [visible, setVisible] = useState(true); //用于显示安装选项：版本和应用名称
    const [customName, setCustomName] = useState(""); //用户存储用户输入的应用名称
    const [showAlert, setShowAlert] = useState(false); //用于是否显示错误提示
    const [alertMessage, setAlertMessage] = useState("");//用于显示错误提示消息
    const [disable, setDisable] = useState(false);//用于按钮禁用
    const [domain, setDomain] = useState("");//用于存储泛域名
    const [enabled, setEnabled] = useState(true);// 使用 useState 钩子来定义一个 state，表示文本框是否启用
    const [hasCreacteDomain, setHasCreacteDomain] = useState(false);//是否创建自定义域名
    const [customDomain, setCustomDomain] = useState("");//自定义域名
    const [showSetting, setShowSetting] = useState(false); //是否显示设置
    const [inputValues, setInputValues] = useState(product?.settings || {}); //用于存储用户输入的应用设置
    const [isAppFavorite, setIsAppFavorite] = useState(isFavorite); //用于存储用户是否收藏了应用
    const [showFavoriteButton, setShowFavoriteButton] = useState(true); // 是否显示收藏按钮

    const handleSettingsInputChange = (key, newValue) => {
        setInputValues({
            ...inputValues,
            [key]: newValue,
        });
    };

    const handleAddToFavorites = async () => {
        // 这里调用父组件传递过来的方法来更新收藏列表
        await onFavoriteUpdate(product.key, true);
        onClose();
    };

    const handleRemoveFromFavorites = async () => {
        // 这里调用父组件传递过来的方法来更新收藏列表
        await onFavoriteUpdate(product.key, false);
        onClose();

    };

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
        cockpit.file('/etc/hosts').watch(content => {
            cockpit.jump(url);
        });
    }

    // 获取泛域名
    const getWildcardDomain = async () => {
        try {
            const domainResponse = await GetSettingsBySection("domain");
            const wildcard_domain = domainResponse?.wildcard_domain;
            return wildcard_domain;
        }
        catch (error) {
            throw new Error(error.message || "Get Wildcard Domain Error");
        }
    }

    //用户单击“安装”按钮
    async function handleInstallClick() {
        if (!visible) {
            let isValid = true;

            if (!customName || customName.length < 2 || customName.length > 20 || /^\d/.test(customName)) { //判断用户是否输入应用名称
                setShowAlert(true);
                setAlertMessage(_("Please enter a custom application name between 2 and 20 characters.Cannot start with a number."))
                isValid = false;
            }
            else if (hasCreacteDomain && !customDomain) {
                setShowAlert(true);
                setAlertMessage(_("Please enter a custom domain name."))
                isValid = false;
            }
            else if (Object.keys(inputValues).length > 0) {
                const portValues = Object.keys(inputValues)
                    .filter(key => key.includes('PORT'))
                    .map(key => inputValues[key]);

                if (portValues.length > 0) {
                    for (const value of portValues) {
                        if (isNaN(value) || value < 1 || value > 65535) {
                            setShowAlert(true);
                            setAlertMessage(_("Port must between 1 and 65535."));
                            isValid = false;
                            break;
                        }
                    }

                    if (isValid) {
                        var script = "bash /usr/share/cockpit/appstore/validate_ports.sh " + portValues.join(" ");
                        try {
                            const no_validate_ports = await cockpit.spawn(["/bin/bash", "-c", script], { superuser: "try" });
                            if (no_validate_ports.toString().trim() != "ok") {
                                setShowAlert(true);
                                setAlertMessage(cockpit.format(_("Port: $0 is already in use."), no_validate_ports));
                                isValid = false;
                            }
                        }
                        catch (error) {
                            const errorText = [error.problem, error.reason, error.message]
                                .filter(item => typeof item === 'string')
                                .join(' ');
                            let exception = errorText || "Validation Port Error";
                            if (errorText.includes("permission denied")) {
                                exception = _("Your user does not have Docker permissions. Grant Docker permissions to this user by command: sudo usermod -aG docker <username>");
                            }
                            setShowAlert(true);
                            setAlertMessage(exception);
                            isValid = false;
                        }
                    }
                }
            }
            if (isValid) {
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
                    "settings": inputValues
                };

                try {
                    await AppInstall({}, req_body);
                    onClose();
                    cockpit.file('/etc/hosts').watch(content => {
                        let url = `myapps`;
                        cockpit.jump(url);
                    });
                }
                catch (error) {
                    setDisable(false);
                    setShowAlert(true);
                    // setAlertMessage(error.message);

                    if (error.message == "Exceed the maximum number of apps") {
                        setAlertMessage(_("The number of applications running exceeds the free version limit.Please <a target='_blank' href='https://www.websoft9.com/pricing'>upgrade</a> to the commercial version."));
                    }
                    else {
                        setAlertMessage(error.message);
                    }
                }
            }
            return;
        }
        setVisible(!visible);
        setShowFavoriteButton(false);
    }

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    let versions = (product.distribution?.filter(item => item.key.toLowerCase() === "community") || []).map(version => { return version.value });//获取应用的版本

    let versionList = (versions && versions.length === 1) ? versions.toString().split(",") : versions;

    const [selectedVersion, setselectedVersion] = useState(versionList[0]); //存储用户选择的安装版本

    const imagName = product?.logo?.imageurl?.split("/").pop(); //获取图片名称

    const is_web_app = product?.is_web_app //判断是否是web应用

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

    const handleCatalogClick = (subCatalog, mainCatalog) => {
        //关闭当前弹窗
        onClose();
        catalogClick(subCatalog, mainCatalog);
    }

    useEffect(() => {
        async function fetchDomain() {
            try {
                const result = await getWildcardDomain();
                setDomain(result);
            }
            catch (error) {
                setShowAlert(true);
                setAlertMessage(error.message);
            }
        }
        fetchDomain();
    }, []);

    useEffect(() => {
        setInputValues(product?.settings || {});
    }, [product?.settings]);

    return (
        <>
            <Modal show={showFlag} onHide={onClose} size="lg" scrollable="true" backdrop="static">
                <Modal.Header onHide={onClose} closeButton>
                    <div style={{ padding: "10px" }}>
                        <div className='appstore-item-content-icon col-same-height'>
                            <a rel="noreferrer" href={product.websiteurl} target="_blank">
                                <img
                                    src={`${baseURL}/media/logos/${imagName}`}
                                    alt=""
                                    className="app-icon"
                                    onError={(e) => (e.target.src = DefaultImg)} />
                            </a>
                        </div>
                        <div className='col-same-height'>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <h3 className="appstore-item-content-title" style={{ marginTop: "5px", marginRight: '10px' }}>
                                    {product.trademark}
                                </h3>
                                <a
                                    rel="noreferrer"
                                    href={`https://support.websoft9.com/${language === "zh_CN" ? '' : 'en/'}docs/${product.key || ''}`}
                                    target="_blank"
                                    style={{ marginRight: '10px' }}
                                >
                                    <Chip label="Documentation" color="primary" size="small" />
                                </a>
                                <a
                                    href={`https://github.com/Websoft9/docker-library/tree/main/apps/${product.key}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <GitHubIcon style={{ fontSize: 25, color: '#000000' }} />
                                </a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{ marginRight: "5px" }}>{_("Version")} : </span>
                                <span
                                    title={versions.join(",")}
                                    style={{
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        maxWidth: "500px",
                                        display: "inline-block",
                                        verticalAlign: "middle"
                                    }}
                                >
                                    {versions.join(",")}
                                </span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <span style={{ marginRight: "5px" }}>{_("Requires at least")} : {product.vcpu} vCPU,  {product.memory}  GB memory, {product.storage} GB storage</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                                <span style={{ marginRight: "5px" }}>{_("Categories")}: </span>
                                {
                                    product?.catalogCollection?.items.map((item, i) => (
                                        <React.Fragment key={item?.key + i}>
                                            <span
                                                style={{
                                                    color: "rgb(25, 118, 210)",
                                                    cursor: "pointer"
                                                }}
                                                onClick={() => handleCatalogClick(item, item?.catalogCollection?.items[0])}
                                            >
                                                {item?.title}
                                            </span>
                                            {i !== product?.catalogCollection?.items.length - 1 && <span style={{ margin: "0 5px" }}>|</span>}
                                        </React.Fragment>
                                    ))
                                }
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
                            <ReactMarkdown>{product.description}</ReactMarkdown>
                        </div>
                    </div>
                    <div style={{ display: visible ? "none" : "block" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ marginTop: "5px" }}>
                                <Form.Group as={Row}>
                                    <span style={{ marginRight: "5px" }}>{_("App Name")} :</span>
                                    <Col sm={is_web_app ? 8 : 12} style={is_web_app ? { paddingRight: 0 } : {}}>
                                        <FormInput type="text" value={customName} name="app_Name"
                                            placeholder={_("Only letters and numbers from 2 to 20 are allowed. No special characters.")}
                                            onChange={(e) => { handleInputChange(e.target.value) }} />
                                    </Col>
                                    {
                                        is_web_app && (
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
                                                        <span>{_("Set global domain")}</span>
                                                    </Fab>
                                                </Col>
                                        )
                                    }
                                </Form.Group>
                                {
                                    is_web_app &&
                                    <div style={{ marginTop: '5px' }}>
                                        <Form.Group as={Row}>
                                            {
                                                !hasCreacteDomain &&
                                                <Col sm={3} style={{ paddingRight: 0 }}>
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
                                }

                            </div>
                            <div style={{ marginTop: "5px" }}>
                                <span style={{ marginRight: "5px" }}>{_("App Version")} :</span>
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
                            {
                                Object.keys(product?.settings || {}).map((key, index) => {
                                    return (
                                        <div style={{ marginTop: "5px" }}>
                                            <span style={{ marginRight: "5px" }}>{_(key)} :</span>
                                            {
                                                <FormInput name={key} type="text" key={key}
                                                    value={inputValues[key] ?? product?.settings[key]}
                                                    onChange={(e) => handleSettingsInputChange(key, e.target.value)}
                                                >
                                                </FormInput>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={onClose}>
                        {_("Close")}
                    </Button>{' '}
                    {/* <Button variant="light" onClick={isFavorite ? handleRemoveFromFavorites : handleAddToFavorites}>
                        {isFavorite ? _("Unfavorite") : _("Favorite")}
                    </Button> */}
                    {showFavoriteButton && (
                        <Button variant="light" onClick={isFavorite ? handleRemoveFromFavorites : handleAddToFavorites}>
                            {isFavorite ? _("Unfavorite") : _("Favorite")}
                        </Button>
                    )}

                    {' '}
                    <Button disabled={disable} variant="primary" onClick={handleInstallClick}>
                        {_("Install")}
                    </Button>
                </Modal.Footer>
            </Modal >
            {
                showAlert &&
                <Snackbar open={showAlert} /*autoHideDuration={5000}*/ onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        <HtmlContent html={alertMessage} />
                    </Alert>
                </Snackbar>
            }

        </>
    );
}


const AppStore = (): React$Element<React$FragmentType> => {
    const [showModal, setShowModal] = useState(false); //用于显示弹窗的标识
    const [selectedProduct, setSelectedProduct] = useState(null); //用于存储被选中的产品（点击应用详情时使用）
    const [isAppFavorite, setIsAppFavorite] = useState(false); //用于存储用户是否收藏了应用
    const [subCatalogs, setSubCatalogs] = useState(null); //用于存储二级目录
    const [allMainCatalogApps, setAllMainCatalogApps] = useState(null); //用于存储某个一级子目录下的所有应用
    const [isAllSelected, setIsAllSelected] = useState(true);
    const [searchValue, setSearchValue] = useState("");
    const [mainCatalogs, setMainCatalogs] = useState([]);
    const [apps, setApps] = useState([]); //用于存储所有app数据
    const [appList, setAppList] = useState([]); //用于存储通过目录筛选出来的数据
    const [favoriteApps, setFavoriteApps] = useState(null); //用于存储用户收藏的app
    const [filteredFavoriteApps, setFilteredFavoriteApps] = useState([]); //用于存储用户收藏的app（过滤出来的json数据）
    const [nonFavoriteApps, setNonFavoriteApps] = useState([]); //用于存储非用户收藏的app
    const [loading, setLoading] = useState(false);
    const [dataError, setDataError] = useState(false);
    const [errorMesage, setErrorMessage] = useState("");//用于显示错误提示消息
    const navigate = useNavigate(); //用于页面跳转
    const [isFavoriteAppsVisible, setFavoriteAppsIsVisible] = useState(true); // 是否显示 我的收藏 ，在收藏的情况下隐藏
    const [selectedMainCatalogKey, setSelectedMainCatalogKey] = useState("All"); //用于存储被选中的主目录
    const [selectedSubCatalogKey, setSelectedSubCatalogKey] = useState("All");   //用于存储被选中的子目录


    const getNginxConfig = async () => {
        try {
            var script = "docker exec -i websoft9-apphub apphub getconfig --section nginx_proxy_manager";
            let content = (await cockpit.spawn(["/bin/bash", "-c", script], { superuser: "try" })).trim();
            content = JSON.parse(content);
            let listen_port = content.listen_port;

            baseURL = `${window.location.protocol}//${window.location.hostname}:${listen_port}`;
        } catch (error) {
            setDataError(true);
            const errorText = [error.problem, error.reason, error.message]
                .filter(item => typeof item === 'string')
                .join(' ');

            if (errorText.includes("permission denied")) {
                setErrorMessage(_("Your user does not have Docker permissions. Grant Docker permissions to this user by command: sudo usermod -aG docker <username>"));
            }
            else {
                setErrorMessage(errorText || "Get Nginx Listen Port Error");
            }
        }
    }

    //获取用户收藏的apps
    const getFavoriteApps = async () => {
        try {
            var script = "docker exec -i websoft9-apphub apphub getconfig --section favorite_apps";
            let content = (await cockpit.spawn(["/bin/bash", "-c", script], { superuser: "try" })).trim();
            content = JSON.parse(content);

            setFavoriteApps(content.keys);
        } catch (error) {
            setDataError(true);
            const errorText = [error.problem, error.reason, error.message]
                .filter(item => typeof item === 'string')
                .join(' ');

            if (errorText.includes("permission denied")) {
                setErrorMessage(_("Your user does not have Docker permissions. Grant Docker permissions to this user by command: sudo usermod -aG docker <username>"));
            }
            else {
                setErrorMessage(errorText || "Get Favorite Apps Error");
            }
        }

    }

    const updateFavoriteApps = async (updatedFavorites) => {
        try {
            // 确保传入的是字符串，如果是数组则转换为字符串，如果数组为空，则传递一个空字符串
            const favoriteString = Array.isArray(updatedFavorites) ? updatedFavorites.join(',') : updatedFavorites;
            const valueArgument = favoriteString !== '' ? favoriteString : '""'; // 当为空字符串时，传递一个双引号包围的空字符串
            const script = `docker exec -i websoft9-apphub apphub setconfig --section favorite_apps --key keys --value ${valueArgument}`;
            await cockpit.spawn(["/bin/bash", "-c", script], { superuser: "try" });
        }
        catch (error) {
            setDataError(true);
            const errorText = [error.problem, error.reason, error.message]
                .filter(item => typeof item === 'string')
                .join(' ');

            if (errorText.includes("permission denied")) {
                setErrorMessage(_("Your user does not have Docker permissions. Grant Docker permissions to this user by command: sudo usermod -aG docker <username>"));
            }
            else {
                setErrorMessage(errorText || "Update Favorite Apps Error");
            }
        }

        // 重新获取收藏列表以确保 UI 是最新的
        await getFavoriteApps();
    };


    const addToFavorites = async (appKey) => {
        // 确保 favoriteApps 是一个数组
        const currentFavorites = favoriteApps ? favoriteApps.split(',') : [];

        // 检查 appKey 是否已经在收藏列表中
        if (!currentFavorites.includes(appKey)) {
            // 如果当前收藏列表为空，则直接添加新项，否则添加逗号和新项
            const updatedFavorites = currentFavorites.length === 0 ? [appKey] : [...currentFavorites, appKey];
            // 更新收藏列表
            await updateFavoriteApps(updatedFavorites);
            setFavoriteApps(updatedFavorites.join(','));

            // 重新计算 nonFavoriteApps
            const updatedNonFavorites = apps.filter(app => !updatedFavorites.includes(app.key));
            setNonFavoriteApps(updatedNonFavorites);
            setAppList(updatedNonFavorites); // 更新 appList
        }

        setIsAllSelected(true);
        setSubCatalogs(null);
        setFavoriteAppsIsVisible(true);
        setSearchValue("");
    };


    const removeFromFavorites = async (appKey) => {
        // 确保 favoriteApps 是一个数组
        let currentFavorites = favoriteApps ? favoriteApps.split(',') : [];

        // 从收藏列表中移除 appKey
        currentFavorites = currentFavorites.filter(key => key !== appKey);

        // 更新收藏列表
        await updateFavoriteApps(currentFavorites);
        setFavoriteApps(currentFavorites.join(','));

        // 重新计算 nonFavoriteApps
        const updatedNonFavorites = apps.filter(app => !currentFavorites.includes(app.key));
        setNonFavoriteApps(updatedNonFavorites);
        setAppList(updatedNonFavorites); // 更新 appList

        setIsAllSelected(true);
        setSubCatalogs(null);
        setSearchValue("");

        setFavoriteAppsIsVisible(currentFavorites.length > 0);
    };

    const onFavoriteUpdate = async (appKey, add) => {
        if (add) {
            await addToFavorites(appKey);
        } else {
            await removeFromFavorites(appKey);
        }
    };



    //获取所有apps
    const getData = async () => {
        try {
            const responses = await Promise.all([
                AppCatalog(language === "zh_CN" ? "zh" : "en"),
                AppAvailable(language === "zh_CN" ? "zh" : "en")
            ]);

            const [catalogResponse, productResponse] = responses;

            const catalogSort = catalogResponse.sort(function (a, b) {
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
            setApps(productResponse);
            setAppList(productResponse);
        } catch (error) {
            setDataError(true);
            setErrorMessage(error.message);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await getData();
            await getFavoriteApps();
            await getNginxConfig();
            setLoading(false);
        };

        fetchData();
    }, []);

    useEffect(() => {
        // 如果有 apps 并且 favoriteApps 为空或者存在
        if (apps && (favoriteApps || favoriteApps === "")) {
            let favoriteAppsArray = [];
            let updatedFavoriteApps = [];
            if (favoriteApps) {
                favoriteAppsArray = favoriteApps.split(',').reverse();
                updatedFavoriteApps = favoriteAppsArray
                    .map(favKey => apps.find(app => app.key === favKey))
                    .filter(app => app); // 过滤掉未找到的项
            }

            // 如果 favoriteApps 为空，则所有 apps 都是非收藏的
            const nonUpdatedFavoriteApps = favoriteApps === ""
                ? apps
                : apps.filter(app => !favoriteAppsArray.includes(app.key));

            setFilteredFavoriteApps(updatedFavoriteApps);
            setNonFavoriteApps(nonUpdatedFavoriteApps);

            // 如果当前没有进行搜索，则更新 appList 为非收藏的应用列表
            if (searchValue === "") {
                setAppList(nonUpdatedFavoriteApps);
            }
        }
    }, [apps, favoriteApps, searchValue]);



    //if (loading) return <Spinner className='dis_mid' />
    // if (dataError) return <p>Error : {errorMesage || "Fetch Data Error"} </p>;

    //用于显示应用详情的弹窗
    const handleClick = (product, isAppFavorite) => {
        setSelectedProduct(product);
        setIsAppFavorite(isAppFavorite);
        setShowModal(true);
    };

    //用于关闭应用详情的弹窗
    const handleClose = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    //当主目录改变时
    // const changeMainCatalog = (selectedMainCatalog) => {
    //     setSelectedMainCatalogKey(selectedMainCatalog);
    //     // setSelectedSubCatalog("All");
    //     setFavoriteAppsIsVisible(selectedMainCatalog === "All" && favoriteApps.length > 0);
    //     // 查询主目录下的二级目录
    //     let updatedData = null;
    //     //  filter
    //     updatedData =
    //         selectedMainCatalog === 'All'
    //             ? []
    //             : mainCatalogs.filter(c => c.key === selectedMainCatalog)?.[0]?.linkedFrom?.catalogCollection?.items;
    //     const data = updatedData.sort(function (a, b) {
    //         if (a.position === null && b.position === null) {
    //             return 0;
    //         } else if (a.position === null) {
    //             return 1;
    //         } else if (b.position === null) {
    //             return -1;
    //         } else {
    //             return a.position - b.position;
    //         }
    //     });
    //     setSubCatalogs(data);

    //     //根据主目录过滤app数据
    //     let subCatalogApps = null;
    //     let mainCatalogAllApps = null;
    //     mainCatalogAllApps = apps.filter(app => app?.catalogCollection?.items.some(sub => sub?.catalogCollection?.items.some(subsub => subsub.key === selectedMainCatalog)));
    //     subCatalogApps =
    //         selectedMainCatalog === "All"
    //             ? /*apps*/ nonFavoriteApps
    //             : mainCatalogAllApps;
    //     setAppList(subCatalogApps);
    //     setAllMainCatalogApps(mainCatalogAllApps);
    //     setIsAllSelected(false);
    //     setSearchValue("");
    // };

    // //当子目录改变时，过滤应用数据
    // const changeSubCatalog = (selectedSubCatalog) => {
    //     setSelectedSubCatalogKey(selectedSubCatalog);
    //     let updatedData = null;
    //     updatedData =
    //         selectedSubCatalog === "All"
    //             ? allMainCatalogApps
    //             : apps.filter(app => app?.catalogCollection?.items.some(c => c.key === selectedSubCatalog));
    //     setAppList(updatedData);
    //     setSearchValue("");

    //     console.log("subCatalogAllApps", updatedData);
    // };

    const changeMainCatalog = (selectedMainCatalog) => {
        return new Promise((resolve) => {
            setSelectedMainCatalogKey(selectedMainCatalog);
            setFavoriteAppsIsVisible(selectedMainCatalog === "All" && favoriteApps.length > 0);

            let updatedData = null;
            updatedData =
                selectedMainCatalog === 'All'
                    ? []
                    : mainCatalogs.filter(c => c.key === selectedMainCatalog)?.[0]?.linkedFrom?.catalogCollection?.items;

            const data = updatedData.sort((a, b) => {
                if (a.position === null && b.position === null) return 0;
                if (a.position === null) return 1;
                if (b.position === null) return -1;
                return a.position - b.position;
            });

            setSubCatalogs(data);

            let subCatalogApps = null;
            let mainCatalogAllApps = apps.filter(app => app?.catalogCollection?.items.some(sub => sub?.catalogCollection?.items.some(subsub => subsub.key === selectedMainCatalog)));
            subCatalogApps = selectedMainCatalog === "All" ? nonFavoriteApps : mainCatalogAllApps;

            setAppList(subCatalogApps);
            setAllMainCatalogApps(mainCatalogAllApps);
            setIsAllSelected(false);
            setSearchValue("");
            resolve();
        });
    };

    const changeSubCatalog = (selectedSubCatalog) => {
        return new Promise((resolve) => {
            setSelectedSubCatalogKey(selectedSubCatalog);
            let updatedData = selectedSubCatalog === "All"
                ? allMainCatalogApps
                : apps.filter(app => app?.catalogCollection?.items.some(c => c.key === selectedSubCatalog));

            setAppList(updatedData);
            setSearchValue("");

            console.log("subCatalogAllApps", updatedData);
            resolve();
        });
    };


    //当搜索框的内容发生改变时，进行app的过滤搜索
    const handleInputChange = (searchString) => {
        setSelectedMainCatalogKey("All");
        setSelectedSubCatalogKey("All");

        setFavoriteAppsIsVisible(searchString === "" && favoriteApps.length > 0);
        setSearchValue(searchString);
        searchString = searchString.toLowerCase();
        let updatedData = null;
        updatedData =
            searchString === ""
                ? /*apps*/ nonFavoriteApps
                : apps.filter(app => { return app.trademark.toLowerCase().includes(searchString) || app.key.toLowerCase().includes(searchString) || app.summary.toLowerCase().includes(searchString) });

        setAppList(updatedData);
        setIsAllSelected(true);
        setSubCatalogs(null);
    }

    // 处理Model中单击 类别 的事件
    const handleCatalogClickForModal = (subCatalog, mainCatalog) => {
        setSelectedProduct(null);

        changeMainCatalog(mainCatalog.key).then(() => {
            changeSubCatalog(subCatalog.key);
        });
    }

    const renderAppItem = (app, i, isAppFavorite) => {
        const imageName = app?.logo?.imageurl?.split("/").pop();
        const isProduction = app?.production !== false; // 检查production属性

        return (
            <Col xxl={3} sm={6} md={4} key={"app-" + i} className="appstore-item">
                <div className='appstore-item-content highlight' onClick={() => { handleClick(app, isAppFavorite) }}>
                    {/* 添加标签容器 */}
                    {!isProduction && (
                        <div className="app-todo-label">
                            To do
                        </div>
                    )}
                    <div className='appstore-item-content-icon col-same-height'>
                        <LazyLoad>
                            <img
                                src={`${baseURL}/media/logos/${imageName}`}
                                alt={imageName}
                                className="app-icon"
                                onError={(e) => (e.target.src = DefaultImg)}
                            />
                        </LazyLoad>
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
    };

    return (
        loading ? /*<Spinner className='dis_mid' />*/ <Spinner animation="border" variant="secondary" className='dis_mid mb-5' /> :
            dataError ? <div className="d-flex align-items-center justify-content-center m-5" style={{ flexDirection: "column" }}>
                <Spinner animation="border" variant="secondary" className='mb-5' />
                <ReactAlert variant="danger" className="my-2">
                    {errorMesage}
                </ReactAlert>
            </div> :
                // dataError ? <p>Error : {errorMesage || "Fetch Data Error"} </p> :
                <>
                    <Row>
                        <Col sm={6}>
                            <Form.Group as={Row}>
                                <Col sm={6}>
                                    <FormInput
                                        name="select1"
                                        type="select"
                                        className="form-select"
                                        key="select1"
                                        value={selectedMainCatalogKey}
                                        onChange={(e) => changeMainCatalog(e.target.value)}>
                                        <option value="All" /*selected={isAllSelected}*/>{_("All")}</option>
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
                                        value={selectedSubCatalogKey}
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

                    {
                        isFavoriteAppsVisible && filteredFavoriteApps.length > 0 && (
                            <Row>
                                <h4 style={{ marginTop: '30px', marginBottom: '20px' }}>{_("My favorites")}</h4>
                                {filteredFavoriteApps.map((app, i) => renderAppItem(app, i, true))}
                            </Row>
                        )
                    }

                    <Row>
                        <h4 style={{ fontWeight: 'normal', marginTop: '20px', marginBottom: '20px' }}>{_("All")}</h4>
                        {appList.map((app, i) => renderAppItem(app, i, favoriteApps.includes(app.key)))}
                    </Row>

                    {showModal && <AppDetailModal
                        product={selectedProduct}
                        showFlag={showModal}
                        onClose={handleClose}
                        isFavorite={isAppFavorite}
                        onFavoriteUpdate={onFavoriteUpdate}
                        catalogClick={handleCatalogClickForModal} />}
                </>
    );
};

export default AppStore;