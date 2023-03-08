// @flow
import { gql, useQuery } from '@apollo/client';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Button, Carousel, Col, Form, Modal, Row } from 'react-bootstrap';
import FormInput from '../components/FormInput';
import Spinner from '../components/Spinner';

const getContentfulData = gql`
    query{
        productCollection(locale:"zh-CN") {
            items {
            sys {
                id
            }
            key
            trademark
            summary
            overview
            websiteurl
            description
            screenshots
            distribution
            highlights
            logo {
                imageurl
            }
            catalogCollection(limit:20) {
                items {
                key
                title
                catalogCollection(limit:1){
                    items{
                        key
                        title
                    }
                    }
                }
            }
            }
        }
        catalog(id: "2Yp0TY3kBHgG6VDjsHZNpK",locale:"zh-CN") {
            linkedFrom(allowedLocales:["en-US"]) {
            catalogCollection(limit:20) {
                items {
                key
                title
                linkedFrom(allowedLocales:["en-US"]) {
                    catalogCollection(limit:20) {
                    items {
                        key
                        title
                    }
                    }
                }
                }
            }
            }
        }
    }
`;

const AppDetailModal = ({ product, showFlag, onClose }) => {
    const [index, setIndex] = useState(0);
    const [code, setCode] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    //安装应用
    const installApp = (appName) => {
        setLoading(true);
        axios
            .get("/api/v1/apps/install", { params: { app_name: appName } })
            .then((response) => {
                setCode(response.data.code);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }

    if (loading) return <Spinner className='dis_mid' color="primary" size="md" />;
    if (code) return <p>Code : ${code} </p>;
    if (error) return <p>Error : ${error} </p>;

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
                <Button variant="primary" onClick={() => { installApp(product.key) }}>
                    Install
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

const AppStore = (): React$Element<React$FragmentType> => {
    const [showModal, setShowModal] = useState(false); //用于显示弹窗的标识
    const [selectedProduct, setSelectedProduct] = useState(null); //用于存储被选中的产品（点击应用详情时使用）
    const [subCatalogs, setSubCatalogs] = useState(null); //用于存储二级目录
    const [allMainCatalogApps, setAllMainCatalogApps] = useState(null); //用于存储某个一级子目录下的所有应用
    const [mainSelect, setMainSelect] = useState("All")
    const [subSelect, setSubSelect] = useState("All")


    const { loading: dataLoading, error: dataError, data: allData } = useQuery(getContentfulData);

    const mainCatalogs = allData?.catalog.linkedFrom.catalogCollection.items; //主目录数据
    const apps = allData?.productCollection?.items;//所有应用数据

    const [appList, setAppList] = useState(apps); //用于存储通过目录筛选出来的数据

    useEffect(() => {
        setAppList(apps);
    }, [apps])

    // if (dataLoading) return <p>Loading...</p>;

    if (dataLoading) return <Spinner className='dis_mid' color="primary" size="md" />;
    if (dataError) return <p>Error : ${dataError.message} </p>;

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
        setSubCatalogs(updatedData);

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
        setMainSelect(selectedMainCatalog);
    };

    //当子目录改变时，过滤应用数据
    const changeSubCatalog = (selectedSubCatalog) => {
        let updatedData = null;
        updatedData =
            selectedSubCatalog === "All"
                ? allMainCatalogApps
                : apps.filter(app => app?.catalogCollection?.items.some(c => c.key === selectedSubCatalog));
        setAppList(updatedData);
        setSubSelect(selectedSubCatalog);
    };

    //当搜索框的内容发生改变时，进行app的过滤搜索
    const handleInputChange = (searchString) => {
        let updatedData = null;
        updatedData =
            searchString === ""
                ? apps
                : apps.filter(app => { return app.trademark.toLowerCase().includes(searchString) || app.key.toLowerCase().includes(searchString) });

        setAppList(updatedData);
        setMainSelect("All");
        setSubSelect("All");
    }

    return (
        <>
            <Row className="mb-2">
                <Col sm={6}>
                    <Form.Group as={Row}>
                        <Col sm={6}>
                            <FormInput
                                value={mainSelect}
                                name="select"
                                type="select"
                                className="form-select"
                                key="select"
                                onChange={(e) => changeMainCatalog(e.target.value)}>
                                <option value="All">All</option>
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
                                value={subSelect}
                                name="select"
                                type="select"
                                className="form-select"
                                key="select"
                                onChange={(e) => changeSubCatalog(e.target.value)}>
                                <option value="All">All</option>
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
                            placeholder="Search for apps like WordPress, Dropbox, Slack, Trello, …"
                            onChange={(e) => handleInputChange(e.target.value)} />
                    </Col>
                </Col>
            </Row>
            <Row>
                {(appList || []).map((app, i) => {
                    return (
                        <Col xxl={3} md={6} key={app.sys.id} className="appstore-item">
                            <div className='appstore-item-content highlight' onClick={() => { handleClick(app) }}>
                                <div className='appstore-item-content-icon col-same-height'>
                                    <img
                                        src={app.logo.imageurl}
                                        alt=""
                                        className="app-icon"
                                    />
                                </div>
                                <div className='col-same-height'>
                                    <h4 className="appstore-item-content-title">
                                        {app.trademark}
                                    </h4>
                                    <div className='appstore-item-content-tagline text-muted'>
                                        {app.summary}
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
