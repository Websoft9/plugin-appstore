import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AdminImg from '../../assets/images/admin-settings.png';
import FormInput from '../../components/FormInput';

const AppAccess = (props): React$Element<React$FragmentType> => {
    const navigate = useNavigate(); //用于页面跳转
    return (
        <>
            <Card style={{ marginTop: "10px" }}>
                <Card.Body className="profile-user-box">
                    <Row>
                        <Col sm={8}>
                            <Row className="align-items-center">
                                <Col className="col-auto">
                                    <div className="avatar-lg">
                                        <img
                                            src={AdminImg}
                                            style={{ height: '100px' }}
                                            alt=""
                                            className="rounded-circle img-thumbnail"
                                        />
                                    </div>
                                </Col>
                                <Col className="avatar-lg">
                                    <div>
                                        <Form.Group as={Row} className="mb-3">
                                            <Form.Label htmlFor="username" column md={3}>
                                                Username
                                            </Form.Label>
                                            <Col md={9}>
                                                <Form.Control
                                                    type="text"
                                                    name="username"
                                                    id="username"
                                                    defaultValue={props.data?.config?.user_name}
                                                    readOnly
                                                />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3">
                                            <Form.Label htmlFor="password" column md={3}>
                                                Password
                                            </Form.Label>
                                            <Col md={9}>
                                                <FormInput
                                                    type="password"
                                                    name="password"
                                                    containerClass={'mb-3'}
                                                    value={props.data?.config?.password}
                                                    readOnly
                                                />
                                            </Col>
                                        </Form.Group>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={4} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                            <div className="text-center mt-sm-0 mt-3 text-sm-end">
                                <button type="button" className="btn btn-light" onClick={() => window.open(props.data.admin_url, '_blank')}>
                                    <i className="mdi mdi-account-edit me-1"></i> Go to login
                                </button>
                            </div>
                        </Col>
                    </Row>

                </Card.Body>

            </Card >
        </>
    );
}

export default AppAccess;