// @flow
//import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, ProgressBar, Row } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import DefaultImg from '../assets/images/default.png';
import FormInput from '../components/FormInput';
import Spinner from '../components/Spinner';
import { getAppDetails, getInstalledApps, getInstallProgress } from '../helpers';
import AppDetailModal from './appdetail';

const MyApps = (): React$Element<React$FragmentType> => {
    const [showModal, setShowModal] = useState(false); //用于显示弹窗的标识
    const [selectedProduct, setSelectedProduct] = useState(null); //用于存储被选中的产品（点击应用详情时使用）
    const [apps, setApps] = useState([]); //所有“我的应用”
    const [statusApps, setStatusApps] = useState([]);//根据状态筛选的应用
    const [selectedStatus, setSelectedStatus] = useState("all"); //用于存储用户筛选应用状态的标识
    const [progress, setProgress] = useState(0); //用于存储应用安装的进度状态
    const [progressId, setProgressId] = useState(""); //用于存储当前正在安装的应用ID，用于做进度查询的参数

    const [code, setCode] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //获取所有已经安装的应用
        getInstalledApps().then((response) => {
            if (response.data.code === 0) {
                setCode(response.data.code);
                setApps(response.data.data);
                setStatusApps(response.data.data);
                setLoading(false);
                response.data.data.forEach(app => {
                    if (app.status === "installing") {
                        setProgressId(app.app_id);
                        getInstallProgress({ app_id: app.app_id }).then((response) => {
                            if (response.data.code === 0) {
                                switch (response.data.message) {
                                    case "step1":
                                        setProgress(1);
                                        break;
                                    case "step2":
                                        setProgress(70);
                                        break;
                                    case "step3":
                                        setProgress(95);
                                        break;
                                    default:
                                        setProgress(0);
                                }
                            }
                            else if (response.data.code === -1) {
                                <Navigate to="/error" />
                            }
                        }).catch(() => {
                            <Navigate to="/error" />
                        })
                    }
                });
            }
            else if (response.data.code === -1) {
                setError(response.data.message);
                setLoading(false);
            }
        }).catch((error) => {
            <Navigate to="/error" />
        });
        setLoading(true);
    }, []);

    useEffect(() => {
        //查询应用安装的进度
        let timer;
        if (progress && progress > 0) {
            timer = setInterval(() => {
                getInstallProgress({ app_id: progressId }).then((response) => {
                    if (response.data.code === 0) {
                        switch (response.data.message) {
                            case "step1":
                                setProgress(70);
                                break;
                            case "step2":
                                setProgress(95);
                                break;
                            case "step3":
                                setProgress(100);
                                clearInterval(timer);
                                break;
                            default:
                                setProgress(0);
                        }
                    }
                    else if (response.data.code === -1) {
                        <Navigate to="/error" />
                    }
                }).catch((error) => {
                    <Navigate to="/error" />
                })
            }, 1000);
        }
        return () => {
            clearInterval(timer);
        };
    }, [progress]);

    if (loading) return <Spinner className='dis_mid' />;
    if (code) return <p>Code : ${code} </p>;
    if (error) return <p>Error : ${error} </p>;

    //用于根据应用“状态”过滤应用
    const changeStatus = (selectedStatus) => {
        let updatedData = null;
        updatedData =
            selectedStatus === "all"
                ? apps
                : apps.filter(app => app.status === selectedStatus);
        setStatusApps(updatedData);
        setSelectedStatus(selectedStatus);
    };

    //用于根据用户输入搜索应用
    const handleInputChange = (searchString) => {
        let updatedData = null;
        updatedData =
            searchString === ""
                ? apps
                : apps.filter(app => { return app.name.toLowerCase().includes(searchString) });
        setStatusApps(updatedData);
        setSelectedStatus("all");
    }

    //用于用户点击应用详情
    const handleClick = async (app_id) => {
        try {
            const response = await getAppDetails({ app_id: app_id });
            if (response.data.code === 0) {
                setSelectedProduct(response.data.data[0]);
                setShowModal(true);
            } else if (response.data.code === -1) {
                <Navigate to="/error" />
            }
        } catch (error) {
            <Navigate to="/error" />;
        }
    };

    //用于关闭应用详情的弹窗
    const handleClose = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    return (
        <>
            <Row className="mb-2" style={{ display: "flex", alignItems: "center" }}>
                <Col sm={2}>
                    <span style={{ fontSize: "36px" }}>My Apps</span>
                </Col>
                <Col sm={3}>
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
                <Col sm={1}>
                    <Button variant="primary" onClick={() => { window.location.reload(true) }} >Refresh</Button>
                </Col>
            </Row>
            <Row>
                {(statusApps || []).map((app, i) => {
                    return (
                        <Col xxl={2} md={6} key={app.app_id + i} className="appstore-item">
                            <div className='appstore-item-content highlight' style={{ textAlign: "center", width: "90%" }}>
                                <div className="float-end arrow-none card-drop p-0" onClick={() => { handleClick(app.app_id) }}>
                                    <i className="dripicons-gear noti-icon"></i>
                                </div>
                                <Link target="_blank" to={app.url}>
                                    <div>
                                        <img
                                            src={app.image_url}
                                            alt={app.name}
                                            className="app-icon"
                                            style={{ margin: "30px 10px 30px 10px" }}
                                            onError={(e) => (e.target.src = DefaultImg)}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="appstore-item-content-title">
                                            {app.customer_name}
                                        </h3>
                                        <div className='appstore-item-content-tagline text-muted'>
                                            {(progress && progress === 100) ? "running" : app.status}
                                        </div>
                                        {
                                            app.status && app.status === "installing" &&
                                            <div>
                                                <ProgressBar now={progress} hidden={progress === 100} label={`${progress}%`}></ProgressBar>
                                            </div>
                                        }
                                    </div>
                                </Link>
                            </div>
                        </Col>
                    );
                })}
            </Row >
            {showModal && <AppDetailModal updateApps={setApps} product={selectedProduct} showFlag={showModal} onClose={handleClose} />}
        </>
    );
};

export default MyApps;
