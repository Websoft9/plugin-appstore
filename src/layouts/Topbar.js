// @flow
import MuiAlert from '@mui/material/Alert';
import classNames from 'classnames';
import cockpit from 'cockpit';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// images
import logoSM from '../assets/images/logo-sm.svg';
import logo from '../assets/images/logo.svg';
import logoEn from '../assets/images/websoft9.svg';

const _ = cockpit.gettext;
const language = cockpit.language;//获取cockpit的当前语言环境

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type TopbarProps = {
    hideLogo?: boolean,
    navCssClasses?: string,
    openLeftMenuCallBack?: () => void,
    topbarDark?: boolean,
};

const Topbar = ({ hideLogo, navCssClasses, openLeftMenuCallBack, topbarDark }: TopbarProps): React$Element<any> => {
    const navbarCssClasses = navCssClasses || '';
    const containerCssClasses = !hideLogo ? 'container-fluid' : '';
    const [alertMessage, setAlertMessage] = useState("");//用于显示错误提示消息
    const [showAlert, setShowAlert] = useState(false); //用于是否显示错误提示
    const [alertType, setAlertType] = useState("");  //用于确定弹窗的类型：error\success
    const [showMask, setShowMask] = useState(false); //用于设置遮罩层
    const [buttonDisable, setButtonDisable] = useState(false); //用于更新按钮禁用
    const [linkDisable, setLinkDisable] = useState(false); //用于超链接禁用
    const [showUpdateLog, setShowUpdateLog] = useState(false); //用于显示更新日志
    const [updateContent, setUpdateContent] = useState({}); //用于存储更新内容
    const [showMaskForQuery, setShowMaskForQuery] = useState(false); //用于查询更新时候的遮罩层
    const navigate = useNavigate(); //用于页面跳转

    const updateLogClose = () => {
        setShowUpdateLog(!showUpdateLog);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowAlert(false);
        setAlertMessage("");
    };

    //查询更新
    // const queryUpdateList = async (init) => {
    //     try {
    //         let response = await cockpit.http({ "address": "websoft9-appmanage", "port": 5000 }).get("/AppStoreUpdateList");
    //         response = JSON.parse(response);
    //         if (response.Error) {
    //             setShowAlert(true);
    //             setAlertType("error")
    //             setAlertMessage(response.Error.Message);
    //         }
    //         else {
    //             setUpdateContent(response.ResponseData.Compare_content); //获取更新内容

    //             if (!init) { //如果不是第一次加载
    //                 setShowAlert(true);
    //                 setAlertType("success")
    //                 setAlertMessage(_("The app store is already the latest version"));
    //             }
    //         }
    //     }
    //     catch (error) {
    //         setShowAlert(true);
    //         setAlertType("error")
    //         setAlertMessage(error);
    //     }
    // }

    //更新应用商店
    // const appStoreUpdate = async () => {
    //     setShowMask(true);
    //     setShowAlert(false);
    //     setButtonDisable(true);
    //     setLinkDisable(true);
    //     setShowUpdateLog(false);
    //     try {
    //         let response = await cockpit.http({ "address": "websoft9-appmanage", "port": 5000 }).get("/AppStoreUpdate");
    //         response = JSON.parse(response);
    //         if (response.Error) {
    //             setShowAlert(true);
    //             setAlertType("error")
    //             setAlertMessage(response.Error.Message);
    //         }
    //         else {
    //             const flag = response.ResponseData.Update_flag;
    //             if (flag) {
    //                 setShowAlert(true);
    //                 setAlertType("success")
    //                 setAlertMessage(_("Update succeeded"));
    //                 setTimeout(() => {
    //                     window.location.reload(true);
    //                 }, 3000);
    //             }
    //             else {
    //                 setShowAlert(true);
    //                 setAlertType("error")
    //                 setAlertMessage(_("Update failed"));
    //             }
    //         }
    //     }
    //     catch (error) {
    //         setShowAlert(true);
    //         setAlertType("error")
    //         setAlertMessage(error);
    //     }
    //     finally {
    //         setButtonDisable(false);
    //         setShowMask(false);
    //         setLinkDisable(false);
    //     }
    // }

    const showChangeLog = () => {
        setShowUpdateLog(true);
    }

    const jumpToSettings = () => {
        let url = `settings`;
        cockpit.file('/etc/hostname').watch(content => {
            console.log(content);
        });
        cockpit.jump(url);
    }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         await queryUpdateList(true);
    //     };
    //     fetchData();
    // }, []);

    return (
        <>
            {/* {
                showMask && (
                    <div className="card-disabled" style={{ zIndex: 999 }}>
                        <Spinner className='dis_mid' style={{ marginTop: "200px" }} />
                        <h3 style={{ textAlign: "center", color: "#6169d0", marginTop: "50px" }}>
                            <strong>
                                {_("App Store is upgrading……")}
                            </strong>
                        </h3>
                    </div>
                )
            }
            {
                showMaskForQuery && (
                    <div className="card-disabled" style={{ zIndex: 999 }}>
                        <Spinner className='dis_mid' style={{ marginTop: "200px" }} />
                        <h3 style={{ textAlign: "center", color: "#6169d0", marginTop: "50px" }}>
                            <strong>
                                {_("Querying for updates, please wait……")}
                            </strong>
                        </h3>
                    </div>
                )
            } */}
            <div className={classNames('navbar-custom', navbarCssClasses)} style={{ pointerEvents: linkDisable ? 'none' : 'auto' }}>
                <div className={containerCssClasses}>
                    {!hideLogo && (
                        <Link to="/" className="topnav-logo">
                            <span className="topnav-logo-lg">
                                {
                                    language === "zh_CN" ? <img src={logo} alt="logo" width="99" /> : <img src={logoEn} alt="logo" width="99" />
                                }
                            </span>
                            <span className="topnav-logo-sm">
                                <img src={logoSM} alt="logo" width="24px" height="24" />
                            </span>
                        </Link>
                    )}
                    {/* <ul style={{
                        display: "flex", justifyContent: "flex-end", flexDirection: "row",
                        alignItems: "center", minHeight: "70px", fontSize: "16px", listStyle: "none",
                        marginBottom: "0px"
                    }}>
                        {
                            updateContent.update ? <li>
                                <button className="position-relative nav-link dropdown-toggle end-bar-toggle arrow-none btn btn-link shadow-none"
                                    style={{ color: "#428bca", fontSize: "16px" }}
                                    onClick={showChangeLog}>
                                    {_("App Store updates available")}
                                    <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                                        <span className="visually-hidden">New alerts</span>
                                    </span>
                                </button>
                            </li> : <li>
                                <button onClick={async () => { setShowMaskForQuery(true); await queryUpdateList(false); setShowMaskForQuery(false); }} disabled={buttonDisable}
                                    className="nav-link dropdown-toggle end-bar-toggle arrow-none btn btn-link shadow-none" style={{ color: "#428bca", fontSize: "16px" }}>
                                    {_("Update App Store")}
                                </button>
                            </li>
                        }
                    </ul> */}
                </div>
            </div >
            {/* {
                showAlert &&
                <Snackbar open={showAlert} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert onClose={handleClose} severity={alertType} sx={{ width: '100%' }}>
                        {alertMessage}
                    </Alert>
                </Snackbar>
            }
            {
                showUpdateLog && <Modal show={showUpdateLog} onHide={updateLogClose} size="lg"
                    scrollable="true" backdrop="static" >
                    <Modal.Header onHide={updateLogClose} closeButton className={classNames('modal-colored-header', 'bg-primary')}>
                        <h4>{_("App Store")}{"(v"}{updateContent?.target_version}{")"}{_("Update Log")}</h4>
                    </Modal.Header>
                    <Modal.Body className="row" >
                        {(() => {
                            switch (updateContent.core_compare) {
                                case "-1":
                                    return (
                                        <>
                                            <p>{_('The kernel version is too low,Please upgrade the kernel first.To upgrade the kernel, please go to')}
                                                <a href="#" onClick={(e) => {
                                                    e.preventDefault();
                                                    let url = `settings`;
                                                    cockpit.file('/etc/hostname').watch(content => {
                                                        console.log(content);
                                                    });
                                                    cockpit.jump(url);
                                                }} >
                                                    {_("Settings")}
                                                </a>
                                            </p>
                                        </>
                                    );
                                case "0":
                                    return updateContent.content?.map((item, index) => (
                                        <p key={index}>{item}</p>
                                    ));
                                case "1":
                                    return <p>{_('Due to unknown reasons, the upgrade is not possible.')}</p>;
                                default:
                                    return null;
                            }
                        })()}
                    </Modal.Body>
                    <Modal.Footer>
                        {(() => {
                            switch (updateContent.core_compare) {
                                case "-1":
                                    return (
                                        <>
                                            <Button variant='primary' onClick={jumpToSettings}>
                                                {_("Settings")}
                                            </Button>
                                        </>
                                    );
                                case "0":
                                    return (
                                        <>
                                            <Button variant='primary' onClick={appStoreUpdate}>
                                                {_("Update")}
                                            </Button>
                                        </>
                                    );
                            }
                        })()}
                        <Button variant='primary' onClick={updateLogClose}>
                            {_("Ignore")}
                        </Button>
                    </Modal.Footer>
                </Modal >
            } */}
        </>
    );
};

export default Topbar;
