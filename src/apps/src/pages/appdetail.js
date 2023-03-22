import classnames from "classnames";
import React from 'react';
import { Col, Modal, Nav, OverlayTrigger, Row, Tab, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DefaultImg from '../assets/images/default.png';
import UninstallTab from './uninstalltab';

const AppDetailModal = ({ updateApps, product, showFlag, onClose }): React$Element<React$FragmentType> => {
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
            title: 'Graphs',
            icon: 'mdi mdi-account-circle',
            text: 'Profile - Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
        },
        {
            id: '7',
            title: 'Event Log',
            icon: 'mdi mdi-account-circle',
            text: 'Profile - Food truck quinoa dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
        },
        {
            id: '8',
            title: 'Uninstall',
            icon: 'mdi mdi-cog-outline',
            text: <UninstallTab updateApps={updateApps} app={product} />,
        },
    ];

    return (
        <Modal show={showFlag} onHide={onClose} size="lg" scrollable="true" >
            <Modal.Header onHide={onClose} closeButton>
                <div style={{ padding: "10px", display: "flex", width: "100%", alignItems: "center" }}>
                    <div className='appstore-item-content-icon col-same-height'>
                        <img
                            src={product.image_url}
                            alt=""
                            className="app-icon"
                            onError={(e) => (e.target.src = DefaultImg)}
                        />
                    </div>
                    <div className='col-same-height'>
                        <h4 className="appstore-item-content-title" style={{ marginTop: "5px" }}>
                            {product.customer_name}
                        </h4>
                        <h5 className="appstore-item-content-title" style={{ marginTop: "5px" }}>
                            {product.status}
                        </h5>
                    </div>
                    <div className='col-same-height' style={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
                        <OverlayTrigger
                            key="bottom1"
                            placement="bottom"
                            overlay={
                                <Tooltip id="tooltip-bottom">
                                    Start App
                                </Tooltip>
                            }>
                            <button
                                className="nav-link dropdown-toggle end-bar-toggle arrow-none btn btn-link shadow-none" style={{ color: "#428bca" }}>
                                <i className="dripicons-media-play noti-icon"></i>{' '}
                            </button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key="bottom2"
                            placement="bottom"
                            overlay={
                                <Tooltip id="tooltip-bottom">
                                    Stop App
                                </Tooltip>
                            }>
                            <button
                                className="nav-link dropdown-toggle end-bar-toggle arrow-none btn btn-link shadow-none" style={{ color: "#428bca" }}>
                                <i className="dripicons-media-stop noti-icon"></i>{' '}
                            </button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key="bottom3"
                            placement="bottom"
                            overlay={
                                <Tooltip id="tooltip-bottom">
                                    Logs
                                </Tooltip>
                            }>
                            <button
                                className="nav-link dropdown-toggle end-bar-toggle arrow-none btn btn-link shadow-none" style={{ color: "#428bca" }}>
                                <i className="dripicons-align-left noti-icon"></i>{' '}
                            </button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key="bottom4"
                            placement="bottom"
                            overlay={
                                <Tooltip id="tooltip-bottom">
                                    Terminal
                                </Tooltip>
                            }>
                            <button
                                className="nav-link dropdown-toggle end-bar-toggle arrow-none btn btn-link shadow-none" style={{ color: "#428bca" }}>
                                <i className="dripicons-code noti-icon"></i>{' '}
                            </button>
                        </OverlayTrigger>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body className="row">
                <Tab.Container defaultActiveKey="Domain">
                    <Col sm={3} className="mb-2 mb-sm-0">
                        <Nav variant="pills" className="flex-column">
                            {tabContents.map((tab, index) => {
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
                            })}
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            {tabContents.map((tab, index) => {
                                return (
                                    <Tab.Pane eventKey={tab.title} id={tab.id} key={index}>
                                        <Row>
                                            <Col sm="12">
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
        </Modal>
    );
}

export default AppDetailModal;