import cockpit from 'cockpit';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, Col, Modal, Row } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import DefaultImg from '../assets/images/default.png';
import FormInput from '../components/FormInput';
import Spinner from '../components/Spinner';
import { AppList, AppUninstall } from '../helpers';
import AppDetailModal from './appdetail';

const _ = cockpit.gettext;

//删除应用弹窗
const UninstallConform = (props): React$Element<React$FragmentType> => {
    const navigate = useNavigate(); //用于页面跳转
    const [disable, setDisable] = useState(false);//用于按钮禁用
    const [showAlert, setShowAlert] = useState(false); //用于是否显示错误提示
    const [alertMessage, setAlertMessage] = useState("");//用于显示错误提示消息

    function closeAllModals() {
        //关闭所有弹窗
        props.onClose();
        props.onDataChange();
    }

    return (
        <Modal show={props.showConform} onHide={props.onClose} size="lg"
            scrollable="true" backdrop="static">
            <Modal.Header onHide={props.onClose} closeButton style={{ border: "none" }}>
                <h4>Remove {props.app.customer_name}</h4>
            </Modal.Header>
            <Modal.Body className="row" >
                <span style={{ margin: "10px 0px" }}>This will immediately remove {props.app.customer_name}</span>
                <div>
                    {showAlert && <Alert variant="danger" className="my-2">
                        {alertMessage}
                    </Alert>}
                </div>
            </Modal.Body>
            <Modal.Footer style={{ border: "none" }}>
                <Button variant="light" onClick={props.onClose}>
                    Close
                </Button>{" "}
                <Button disabled={disable} variant="warning" onClick={async () => {
                    try {
                        setDisable(true);
                        //调用卸载应用接口
                        const response = await AppUninstall({ app_id: props.app.app_id });
                        if (response.data.Error) {
                            setShowAlert(true);
                            setAlertMessage(response.data.Error.Message);
                        }
                        else {
                            closeAllModals(); //关闭弹窗并更新数据
                        }
                    }
                    catch (error) {
                        navigate("/error-500");
                    }
                }}>
                    {disable && <Spinner className="spinner-border-sm me-1" tag="span" color="white" />} Uninstall
                </Button>
            </Modal.Footer>
        </Modal >
    );
}

const MyApps = (): React$Element<React$FragmentType> => {
    const [showModal, setShowModal] = useState(false); //用于显示状态为running或exited弹窗的标识
    const [showUninstallConform, setShowUninstallConform] = useState(false); //用于显示状态为failed时确定删除的弹窗
    const [showOtherAppModal, setShowOtherAppModal] = useState(false); //用于显示非websoft9应用的的弹窗的标识

    const [selectedApp, setSelectedApp] = useState(null); //用于存储被选中的产品（点击应用详情时使用）
    const [apps, setApps] = useState([]); //所有“我的应用”
    const [statusApps, setStatusApps] = useState([]);//根据状态筛选的应用
    const [searchString, setSearchString] = useState("");//用户输入的筛选字符串
    const [selectedStatus, setSelectedStatus] = useState("all"); //用于存储用户筛选应用状态的标识
    const [progressId, setProgressId] = useState([]); //用于存储当前正在安装的应用ID，用于做进度查询的参数

    const selectedAppRef = useRef(selectedApp);

    const [code, setCode] = useState(0);
    const [error, setError] = useState(null);
    const [errorDetails, setErrorDetails] = useState(null)
    const [loading, setLoading] = useState(false);

    let timer;

    //获取所有已安装的App(只执行一次)
    const getAllAppsOnce = () => {
        AppList().then((response) => {
            if (response.data.Error) {
                setCode(response.data.Error.Code);
                setError(response.data.Error.Message);
                setErrorDetails(response.data.Error.Details);
            }
            else {
                const newApps = response.data.ResponseData;
                setApps(newApps);
                if (selectedAppRef.current) {
                    const updatedApp = newApps.find(
                        (app) => app.app_id === selectedAppRef.current.app_id
                    );
                    setSelectedApp(updatedApp);
                }
            }
            setLoading(false);
        }).catch((error) => {
            <Navigate to="/error-500" />
        });
    }

    //获取所有已安装的App(每隔5秒执行一次)
    const getAllApps = () => {
        setLoading(true);
        //调用接口获取已经安装应用
        timer = setInterval(() => {
            AppList().then((response) => {
                if (response.data.Error) {
                    setCode(response.data.Error.Code);
                    setError(response.data.Error.Message);
                    setErrorDetails(response.data.Error.Details);
                }
                else {
                    const newApps = response.data.ResponseData;
                    setApps(newApps);
                    if (selectedAppRef.current) {
                        const updatedApp = newApps.find(
                            (app) => app.app_id === selectedAppRef.current.app_id
                        );
                        setSelectedApp(updatedApp);
                    }
                }
                setLoading(false);
            }).catch((error) => {
                <Navigate to="/error-500" />
            });
        }, 5000);
        return () => clearInterval(timer);
    }

    useEffect(() => {
        getAllAppsOnce();
    }, []);

    useEffect(() => {
        getAllApps();
    }, []);

    useEffect(() => {
        selectedAppRef.current = selectedApp;
    }, [selectedApp]);

    useEffect(() => {
        return () => clearInterval(timer);  //用于清除定时器
    }, []);

    if (loading) return <Spinner className='dis_mid' />;
    if (code) return <p>Code : ${code} </p>;
    if (error) return <p>Error : ${error} </p>;

    //用于根据应用“状态”过滤应用
    const changeStatus = (selectedStatus) => {
        setSelectedStatus(selectedStatus);
    };

    //用于根据用户输入搜索应用
    const handleInputChange = (searchString) => {
        setSearchString(searchString);
    }

    //用于用户点击应用详情
    const handleClick = (app) => {
        setSelectedApp(app);
        setShowModal(true);
    };

    //用于应用为failed时删除应用
    const deleteApp = (app) => {
        setSelectedApp(app);
        setShowUninstallConform(true);
    };

    //用于取消删除应用
    const CanceldeleteApp = () => {
        setShowUninstallConform(false);
    };

    //用于关闭应用详情的弹窗
    const handleClose = () => {
        setShowModal(false);
        setSelectedApp(null);
    };

    //用于立即刷新数据
    const handleDataChange = () => {
        getAllAppsOnce();
    };

    return (
        <>
            <Row className="mb-2" style={{ display: "flex", alignItems: "center" }}>
                <Col sm={2}>
                    <span style={{ fontSize: "36px" }}>{_("My Apps")}</span>
                </Col>
                <Col sm={3}>
                    <FormInput
                        value={selectedStatus}
                        name="select"
                        type="select"
                        className="form-select"
                        key="select"
                        onChange={(e) => changeStatus(e.target.value)} >
                        <option value="all">{_("All States")}</option>
                        <option value="installing">installing</option>
                        <option value="running">running</option>
                        <option value="exited">exited</option>
                        <option value="restarting">restarting</option>
                        <option value="failed">failed</option>
                    </FormInput>
                </Col>
                <Col sm={6}>
                    <Col xs="auto">
                        <FormInput type="text" name="search"
                            placeholder="Search for apps like WordPress, Dropbox, Slack, Trello, …"
                            onChange={(e) => handleInputChange(e.target.value)}
                        />
                    </Col>
                </Col>
                <Col sm={1}>
                    <Button variant="primary" style={{ float: "right" }} onClick={() => {
                        window.location.reload(false);
                    }}>{_("Refresh")}</Button>
                </Col>
            </Row>
            {
                [true, false].map((official_app) => {
                    // 过滤出符合条件的apps
                    const filteredApps = apps.filter((app) => selectedStatus === 'all' || app.status === selectedStatus)
                        .filter((app) => app.official_app === official_app)
                        .filter((app) => app.customer_name.includes(searchString));
                    // 如果有数据，返回一个Row组件，否则返回null
                    return filteredApps.length > 0 ? (
                        <Row>
                            {/* 根据official_app的值显示不同的标题 */}
                            <h4 style={official_app ? {} : { paddingTop: "10px" }}>{official_app ? _("Websoft9's Apps") : _("Other Apps")}</h4>
                            {filteredApps.map((app, i) => (
                                <Col xxl={2} md={6} key={app.app_id + i} className="appstore-item">
                                    <div className='appstore-item-content highlight' style={{ textAlign: "center" }}>
                                        {
                                            (app.status === "running" || app.status === "exited") &&
                                            <div className="float-end arrow-none card-drop p-0" onClick={() => { handleClick(app) }}>
                                                <i className="dripicons-gear noti-icon"></i>
                                            </div>
                                        }
                                        {
                                            app.status === 'failed' &&
                                            <div className="float-end arrow-none card-drop p-0" onClick={() => { deleteApp(app) }}>
                                                <i className="dripicons-trash noti-icon"></i>
                                            </div>
                                        }
                                        <div>
                                            <img
                                                src={app.image_url}
                                                alt={app.app_name}
                                                className="app-icon"
                                                style={{ margin: "30px 10px 30px 10px" }}
                                                onError={(e) => (e.target.src = DefaultImg)}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="appstore-item-content-title" style={{ color: "#2196f3" }}>
                                                {app.customer_name}
                                            </h3>
                                            <div style={{ color: app.status === 'failed' ? 'red' : 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                {app.status && app.status === "installing" && <Spinner className="spinner-border-sm m-2" />}
                                                {" "}
                                                <div className="m-2">{app.status}</div>
                                            </div>
                                        </div>
                                    </div >
                                </Col >
                            ))}
                        </Row >
                    ) : null;
                })
            }
            {
                showModal && <AppDetailModal current_app={selectedApp} showFlag={showModal} onClose={handleClose} onDataChange={handleDataChange} />
            }
            {
                showUninstallConform &&
                <UninstallConform showConform={showUninstallConform} onClose={CanceldeleteApp} app={selectedApp} onDataChange={handleDataChange} />
            }
        </>
    );
};

export default MyApps;
