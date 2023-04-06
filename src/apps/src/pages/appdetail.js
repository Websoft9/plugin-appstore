import classnames from "classnames";
import { default as React, useEffect, useState } from 'react';
import { Col, Modal, Nav, OverlayTrigger, Row, Tab, Tooltip } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import DefaultImg from '../assets/images/default.png';
import { getAppDetails } from '../helpers';
import EventLogs from './eventlogs';
import Terminal from './myterminal';
import UninstallTab from './uninstalltab';

const AppDetailModal = (props): React$Element<React$FragmentType> => {
    const [currentApp, setCurrentApp] = useState(null); // 用于存储当前App的详情
    // const [disable, setDisable] = useState(false);//用于按钮禁用
    const navigate = useNavigate(); //用于页面跳转

    useEffect(() => {
        try {
            //获取应用详情
            getAppDetails({ app_id: props.app_id }).then((response) => {
                if (response.data.code === 0) {
                    setCurrentApp(response.data.data);
                } else if (response.data.code === -1) {

                }
            });
        } catch (error) {

        }
    }, []);

    //用于更新当前Modal的APP数据的运行状态
    const handleDataChange = (newStatus) => {
        setCurrentApp({
            ...currentApp,
            status: newStatus
        });
    };

    const tabContents = [
        {
            id: '1',
            title: 'Domain',
            icon: 'mdi mdi-home-variant',
            text: 'Home - Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
        },
        {
            id: '2',
            title: 'Login',
            icon: 'mdi mdi-account-circle',
            text: 'Profile - Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
        },
        {
            id: '3',
            title: 'Container',
            icon: 'mdi mdi-account-circle',
            text: 'Profile - Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
        },
        {
            id: '4',
            title: 'Backups',
            icon: 'mdi mdi-account-circle',
            text: 'Profile - Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
        },
        {
            id: '5',
            title: 'Updates',
            icon: 'mdi mdi-account-circle',
            text: 'Profile - Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
        },
        {
            id: '6',
            title: 'Terminal',
            icon: 'mdi mdi-account-circle',
            text: <Terminal data={currentApp} />,
        },
        {
            id: '7',
            title: 'Logs',
            icon: 'mdi mdi-account-circle',
            text: <EventLogs projectName={currentApp} />,
        },
        {
            id: '8',
            title: 'Uninstall',
            icon: 'mdi mdi-cog-outline',
            text: <UninstallTab data={currentApp} onDataChange={handleDataChange}
                onFatherDataChange={props.onDataChange} onAllDataChange={props.onAllDataChange} onCloseFatherModal={props.onClose} />,
        },
    ];

    return (
        currentApp && <Modal show={props.showFlag} onHide={props.onClose} size="lg" scrollable="true" dialogClassName="modal-full-width" >
            <Modal.Header onHide={props.onClose} closeButton>
                <div style={{ padding: "10px", display: "flex", width: "100%", alignItems: "center" }}>
                    <div className='appstore-item-content-icon col-same-height'>
                        <img
                            src={currentApp.image_url}
                            alt=""
                            className="app-icon"
                            onError={(e) => (e.target.src = DefaultImg)}
                        />
                    </div>
                    <div className='col-same-height'>
                        <h4 className="appstore-item-content-title" style={{ marginTop: "5px" }}>
                            {currentApp.customer_name}
                        </h4>
                        <h5 className="appstore-item-content-title" style={{ marginTop: "5px" }}>
                            {currentApp.status}
                        </h5>
                    </div>
                    <div className='col-same-height' style={{ flexGrow: 1, display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                        {
                            currentApp.status === "stop" ?
                                <OverlayTrigger
                                    key="bottom1"
                                    placement="bottom"
                                    overlay={
                                        <Tooltip id="tooltip-bottom">
                                            Start App
                                        </Tooltip>
                                    }>
                                    <button
                                        className="nav-link dropdown-toggle end-bar-toggle arrow-none btn btn-link shadow-none"
                                        style={{ color: "#fff", backgroundColor: "#2196f3", padding: "5px 10px", borderRadius: "3px", borderColor: "#2196f3", marginRight: "10px" }}>
                                        <i className="dripicons-media-play noti-icon"></i>{' '}
                                    </button>
                                </OverlayTrigger>
                                :
                                <OverlayTrigger
                                    key="bottom2"
                                    placement="bottom"
                                    overlay={
                                        <Tooltip id="tooltip-bottom">
                                            Stop App
                                        </Tooltip>
                                    }>
                                    <button
                                        className="nav-link dropdown-toggle end-bar-toggle arrow-none btn btn-link shadow-none"
                                        style={{ color: "#fff", backgroundColor: "#2196f3", padding: "5px 10px", borderRadius: "3px", borderColor: "#2196f3", marginRight: "10px" }}>
                                        <i className="dripicons-media-stop noti-icon"></i>{' '}
                                    </button>
                                </OverlayTrigger>
                        }
                        <OverlayTrigger
                            key="bottom2"
                            placement="bottom"
                            overlay={
                                <Tooltip id="tooltip-bottom">
                                    Restart App
                                </Tooltip>
                            }>
                            <button
                                className="nav-link dropdown-toggle end-bar-toggle arrow-none btn btn-link shadow-none"
                                style={{ color: "#fff", backgroundColor: "#2196f3", padding: "5px 10px", borderRadius: "3px", borderColor: "#2196f3", marginRight: "10px" }}>
                                <i className="dripicons-clockwise noti-icon"></i>{' '}
                            </button>
                        </OverlayTrigger>
                        {/* <OverlayTrigger
                            key="bottom4"
                            placement="bottom"
                            overlay={
                                <Tooltip id="tooltip-bottom">
                                    Terminal
                                </Tooltip>
                            }>
                            <Link to={{ pathname: '/terminal', search: `?id=${currentApp.customer_name}` }}
                                style={{ color: "#fff", backgroundColor: "#2196f3", padding: "5px 10px", borderRadius: "3px", borderColor: "#2196f3", marginRight: "10px" }}
                                target="_blank">
                                <i className="dripicons-code noti-icon"></i>{' '}
                            </Link>
                        </OverlayTrigger> */}
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body className="row">
                <Tab.Container defaultActiveKey="Domain">
                    <Col sm={2} className="mb-2 mb-sm-0">
                        <Nav variant="pills" className="flex-column">
                            {tabContents.map((tab, index) => {
                                const renderElement = () => {
                                    return (
                                        <Nav.Item key={index}>
                                            <Nav.Link as={Link} to="#" eventKey={tab.title}>
                                                <i
                                                    className={classnames(
                                                        tab.icon,
                                                        'd-md-none',
                                                        'd-block',
                                                        'me-1'
                                                    )}></i>
                                                <span className="d-none d-md-block">{tab.title}</span>
                                            </Nav.Link>
                                        </Nav.Item>
                                    );
                                }
                                if (tab.title === "Terminal") {
                                    if (currentApp.status === "running") {
                                        return renderElement();
                                    }
                                } else {
                                    return renderElement();
                                }
                            })}
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content style={{ height: "100%" }}>
                            {tabContents.map((tab, index) => {
                                return (
                                    <Tab.Pane eventKey={tab.title} id={tab.id} key={index} style={{ height: "100%" }}>
                                        <Row style={{ height: "100%" }}>
                                            <Col sm="12" style={{ height: tab.title === "Terminal" ? "600px" : "" }}>
                                                {tab.text}
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                );
                            })}
                        </Tab.Content>
                    </Col>
                </Tab.Container>
            </Modal.Body>
        </Modal >
    );
}

export default AppDetailModal;