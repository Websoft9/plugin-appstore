import cockpit from "cockpit";
import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const _ = cockpit.gettext;

const AppOverview = (props): React$Element<React$FragmentType> => {
    const navigate = useNavigate(); //用于页面跳转

    return (
        <Row>
            <Col xs={12}>
                <Card>
                    <Card.Header>
                        <label className="me-2 fs-5 d-block">应用概览</label>
                    </Card.Header>
                    <Card.Body>
                        {/* <Row className="mb-2">
                            <Col xs={12} md={12}>
                                <label className="me-2 fs-6 d-block">应用名称：{props.data?.app_name}</label>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col xs={12} md={12}>
                                <label className="me-2 fs-6 d-block">应用版本：{props.data?.app_version}</label>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col xs={12} md={12}>
                                <label className="me-2 fs-6 d-block">创建时间：{props.data?.create_time}</label>
                            </Col>
                        </Row >
                        <Row className="mb-2">
                            <Col xs={12} md={12}>
                                <label className="me-2 fs-6 d-block">配置目录：/data/apps/{props.data?.customer_name}</label>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col xs={12} md={12}>
                                <label className="me-2 fs-6 d-block">数据目录：{props.data?.volume_data}</label>
                            </Col>
                        </Row> */}
                        <Table responsive className="mb-0" bordered={false}>
                            <tbody>
                                <tr>
                                    <td style={{ width: '10%', fontWeight: "bold" }}>应用名称：</td>
                                    <td>{props.data?.app_name}</td>
                                </tr>
                                <tr>
                                    <td style={{ width: '10%', fontWeight: "bold" }}>应用版本：</td>
                                    <td>{props.data?.app_version}</td>
                                </tr>
                                <tr>
                                    <td style={{ width: '10%', fontWeight: "bold" }}>创建时间：</td>
                                    <td>{props.data?.create_time}</td>
                                </tr>
                                <tr>
                                    <td style={{ width: '10%', fontWeight: "bold" }}>配置目录： </td>
                                    <td>{props.data?.config_path}</td>
                                </tr>
                                <tr>
                                    <td style={{ width: '10%', fontWeight: "bold" }}>数据目录：</td>
                                    <td>{props.data?.volume_data}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default AppOverview;