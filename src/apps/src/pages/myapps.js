import cockpit from 'cockpit';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import DefaultImg from '../assets/images/default.png';
import FormInput from '../components/FormInput';
import Spinner from '../components/Spinner';
import { AppList } from '../helpers';
import AppDetailModal from './appdetail';

const _ = cockpit.gettext;

const MyApps = (): React$Element<React$FragmentType> => {
    const [showModal, setShowModal] = useState(false); //用于显示弹窗的标识
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
                    // if (selectedApp) {
                    //     const updatedApp = newApps.find((app) => app.app_id === selectedApp.app_id);
                    //     setSelectedApp(updatedApp);
                    // }

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

    //用于关闭应用详情的弹窗
    const handleClose = () => {
        setShowModal(false);
        setSelectedApp(null);
    };

    //用于用户启动、停止应用时，同步更新主页APP的状态
    const handleDataChange = (id) => {
        getAllAppsOnce();
        // AppStatus({ app_id: id }).then((response) => {
        //     if (response.data.Error) {
        //         <Navigate to="/error" />
        //     }
        //     else {
        //         const newItems = statusApps.map(item => {
        //             if (item.app_id === id) {
        //                 return { ...item, status: response.data.ResponseData.status };
        //             }
        //             return item;
        //         });
        //         setStatusApps(newItems);
        //         setSelectedApp(newItems.find(item => item.app_id === id)); //将重新查询状态后的APP数据传递到子组件，用于更新子组件中的数据
        //         setApps(newItems); //状态改变后，需要重置apps的原始数据，否则状态查询的结果将是状态改变前的数据
        //     }
        // }).catch((error) => {
        //     <Navigate to="/error-500" />
        // })
    };

    //更新所有数据
    const handleAllDataChange = (id) => {
        //getAllApps(); //通过刷新重新获取数据
        getAllAppsOnce();

        //通过过滤本地数据后重新绑定数据来刷新数据
        // const newItems = statusApps.filter(item => item.app_id !== id);
        // setStatusApps(newItems);
        // setApps(newItems);//应用卸载后，需要重置apps的原始数据，否则状态查询的结果将是应用卸载前的数据
    }

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
                        getAllAppsOnce()
                    }}>{_("Refresh")}</Button>
                </Col>
            </Row>
            {
                [true, false].map((official_app) => (
                    <Row>
                        {official_app ? <h4>{_("Websoft9's Apps")}</h4> : <h4>{_("Other Apps")}</h4>}
                        {apps.filter((app) => selectedStatus === 'all' || app.status === selectedStatus)
                            .filter((app) => app.official_app === official_app)
                            .filter((app) => app.customer_name.includes(searchString))
                            .map((app, i) => (
                                <Col xxl={2} md={6} key={app.app_id + i} className="appstore-item">
                                    <div className='appstore-item-content highlight' style={{ textAlign: "center" }}>
                                        {
                                            (app.status === "running" || app.status === "exited") &&
                                            <div className="float-end arrow-none card-drop p-0" onClick={() => { handleClick(app) }}>
                                                <i className="dripicons-gear noti-icon"></i>
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
                                                {app.status}
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                    </Row>
                ))
            }
            {
                showModal && <AppDetailModal current_app={selectedApp} showFlag={showModal} onClose={handleClose}
                    onDataChange={handleDataChange} onAllDataChange={handleAllDataChange} />
            }
        </>
    );
};

export default MyApps;
