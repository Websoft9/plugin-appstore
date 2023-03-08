// @flow
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Button, Carousel, Col, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormInput from '../components/FormInput';
import Spinner from '../components/Spinner';

const AppDetailModal = ({ product, showFlag, onClose }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    let versionList = (product.distribution?.filter(item => item.key === "Community") || []).map(version => { return version.value });

    return (
        <Modal show={showFlag} size="lg" scrollable="true">
            <Modal.Header >
                <div style={{ padding: "10px" }}>
                    <div className='appstore-item-content-icon col-same-height'>
                        <img
                            src={product.logo.imageurl}
                            alt=""
                            className="app-icon"
                        />
                    </div>
                    <div className='col-same-height'>
                        <h4 className="appstore-item-content-title" style={{ marginTop: "5px" }}>
                            {product.trademark}
                        </h4>
                        <div>
                            <a rel="noreferrer" href={`https://support.websoft9.com/docs/` + product.key} target="_blank" style={{ color: '#2196f3' }} >{product.trademark} developers</a>
                        </div>
                        <div>
                            Versions: {product.trademark} {versionList}
                        </div>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body>
                <Carousel activeIndex={index} onSelect={handleSelect} style={{ width: "80%", margin: "0 auto" }}>
                    {
                        (product.screenshots || []).map((item) => {
                            return (
                                <Carousel.Item key={item?.id} >
                                    <img
                                        className="d-block"
                                        src={item?.value}
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
                    <h4>Overview</h4>
                    {product.overview}
                </div>
                <div style={{ padding: "10px" }}>
                    <h4>Description</h4>
                    {product.description}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={onClose}>
                    Close
                </Button>{' '}
                <Button variant="primary" onClick={onClose}>
                    Install
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

const MyApps = (): React$Element<React$FragmentType> => {
    const [apps, setApps] = useState([]); //所有“我的应用”
    const [statusApps, setStatusApps] = useState([]);//根据状态筛选的应用
    const [selectedStatus, setSelectedStatus] = useState("all");

    const [code, setCode] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("/api/v1/apps")
            .then((response) => {
                setCode(response.data.code);
                setApps(response.data.data);
                setStatusApps(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <Spinner className='dis_mid' color="primary" size="md" />;
    if (code) return <p>Code : ${code} </p>;
    if (error) return <p>Error : ${error} </p>;

    const changeStatus = (selectedStatus) => {
        let updatedData = null;
        updatedData =
            selectedStatus === "all"
                ? apps
                : apps.filter(app => app.status === selectedStatus);
        setStatusApps(updatedData);
        setSelectedStatus(selectedStatus);
    };

    const handleInputChange = (searchString) => {
        let updatedData = null;
        updatedData =
            searchString === ""
                ? apps
                : apps.filter(app => { return app.name.toLowerCase().includes(searchString) });
        setStatusApps(updatedData);
        setSelectedStatus("all");
    }

    return (
        <>
            <Row className="mb-2" style={{ display: "flex", alignItems: "center" }}>
                <Col sm={2}>
                    <span style={{ fontSize: "36px" }}>My Apps</span>
                </Col>
                <Col sm={4}>
                    <FormInput
                        value={selectedStatus}
                        name="select"
                        type="select"
                        className="form-select"
                        key="select"
                        onChange={(e) => changeStatus(e.target.value)} >
                        <option value="all">All States</option>
                        <option value="running">Running</option>
                        <option value="stop">Stopped</option>
                        <option value="error">Not Responding</option>
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
            </Row>
            <Row>
                {(statusApps || []).map((app, i) => {
                    return (
                        <Col xxl={2} md={6} key={app.id + i} className="appstore-item">
                            <div className='appstore-item-content highlight' style={{ textAlign: "center", width: "90%" }}>
                                <Link to="/app" className="float-end arrow-none card-drop p-0">
                                    <i className="dripicons-gear noti-icon"></i>
                                </Link>
                                <Link target="_blank" to={app.url}>
                                    <div>
                                        <img
                                            src={app.image_url}
                                            alt={app.name}
                                            className="app-icon"
                                            style={{ margin: "30px 10px 30px 10px" }}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="appstore-item-content-title">
                                            {app.name}
                                        </h3>
                                        <div className='appstore-item-content-tagline text-muted'>
                                            {app.status}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
};

export default MyApps;
