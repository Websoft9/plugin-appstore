// @flow
import MuiAlert from '@mui/material/Alert';
import classNames from 'classnames';
import cockpit from 'cockpit';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { Link, useNavigate } from 'react-router-dom';

// images
import Snackbar from '@mui/material/Snackbar';
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
    const [updateLog, setUpdateLog] = useState("");//用于存储更新日志
    const navigate = useNavigate(); //用于页面跳转

    const updateLogClose = () => {
        setShowUpdateLog(!showUpdateLog);
        window.location.reload(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowAlert(false);
        setAlertMessage("");
    };

    //查询更新内容
    const quertUpdateList = async () => {
        try {
            let data = await cockpit.spawn(["docker", "inspect", "-f", "{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}", "websoft9-appmanage"], { superuser: "require" });
            let IP = data.trim();
            if (IP) {
                let response = await cockpit.http({ "address": IP, "port": 5000 }).get("/AppStoreUpdateList");
                response = JSON.parse(response);
                if (response.data.Error) {
                    setShowAlert(true);
                    setAlertType("error")
                    setAlertMessage(response.Error.Message);
                }
                else {
                    const updateInfo = response.ResponseData.Compare_content.update;
                    if (updateInfo) {
                        setShowAlert(true);
                        setAlertType("success")
                        setAlertMessage(_("The app store is already the latest version"));
                    }
                    else {
                        const updateLog = response.ResponseData.Compare_content.content;
                        setUpdateLog(updateLog);
                    }
                }
            }
        }
        catch (error) {
            setShowAlert(true);
            setAlertType("error")
            setAlertMessage(error);
        }
    }

    const showChangeLog = () => {
        setShowUpdateLog(true);
        setAlertMessage(updateLog);
    }

    //调用更新应用列表接口
    async function handleUpdateClick() {
        setShowMask(true);
        setShowAlert(false);
        setButtonDisable(true);
        setLinkDisable(true);
        try {
            let data = await cockpit.spawn(["docker", "inspect", "-f", "{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}", "websoft9-appmanage"], { superuser: "require" });
            let IP = data.trim();
            if (IP) {
                let response = await cockpit.http({ "address": IP, "port": 5000 }).get("/AppStoreUpdateList");
                response = JSON.parse(response);
                if (response.data.Error) {
                    setShowAlert(true);
                    setAlertType("error")
                    setAlertMessage(response.Error.Message);
                }
                else {
                    const updateInfo = response.ResponseData.Compare_content.update;
                    if (updateInfo) {
                        setShowAlert(true);
                        setAlertType("success")
                        setAlertMessage(_("The app store is already the latest version"));
                    }
                    else {
                        const updateLog = response.ResponseData.Compare_content.content;
                        setShowUpdateLog(true);
                        setAlertMessage(updateLog);
                    }
                }
            }
        }
        catch (error) {
            navigate("/error-500");
        }
        finally {
            setButtonDisable(false);
            setShowMask(false);
            setLinkDisable(false);
        }
    }

    useEffect(async () => {
        await quertUpdateList();
    }, []);


    return (
        <>
            {
                showMask && (
                    <div className="card-disabled" style={{ zIndex: 999 }}>
                        <Spinner className='dis_mid' style={{ marginTop: "200px" }} />
                    </div>
                )
            }
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
                    <ul style={{
                        display: "flex", justifyContent: "flex-end", flexDirection: "row",
                        alignItems: "center", minHeight: "70px", fontSize: "16px", listStyle: "none",
                        marginBottom: "0px"
                    }}>
                        {
                            updateLog ? <li>
                                <button onClick={showChangeLog}
                                    className="nav-link dropdown-toggle end-bar-toggle arrow-none btn btn-link shadow-none" style={{ color: "#428bca", fontSize: "16px" }}>
                                    {_("App Store updates available")}
                                </button>
                            </li> : <li>
                                <button onClick={handleUpdateClick} disabled={buttonDisable}
                                    className="nav-link dropdown-toggle end-bar-toggle arrow-none btn btn-link shadow-none" style={{ color: "#428bca", fontSize: "16px" }}>
                                    {_("Update Application List")}
                                </button>
                            </li>
                        }
                    </ul>
                </div>
            </div>
            {
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
                        <h4>{_("App Store")}{" "}{_("Update Log")}</h4>
                    </Modal.Header>
                    <Modal.Body className="row" >
                        {alertMessage.map((item, index) => (
                            // <p key={index}>{index + 1}{" : "}{item}</p>
                            <p key={index}>{item}</p>
                        ))}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='primary'>
                            {_("Update")}
                        </Button>
                        <Button variant='primary' onClick={updateLogClose}>
                            {_("Close")}
                        </Button>
                    </Modal.Footer>
                </Modal >
            }
        </>
    );
};

export default Topbar;
