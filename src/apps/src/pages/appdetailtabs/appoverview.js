import cockpit from "cockpit";
import React, { useState } from 'react';
import { Col, Collapse, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../../components/FormInput';

const _ = cockpit.gettext;

const AppOverview = (props): React$Element<React$FragmentType> => {
    const navigate = useNavigate(); //用于页面跳转
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Row className="mb-2">
                <p>
                    <Link to="#" className="btn btn-primary" onClick={toggle}>
                        First Time Usage
                    </Link>
                </p>
                <Collapse in={isOpen}>
                    <div>
                        <p>
                            This app is pre-setup with an admin account,Please change the admin password immediately. The initial credentials are:
                        </p>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="username" column md={1}>
                                Username
                            </Form.Label>
                            <Col md={3}>
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
                            <Form.Label htmlFor="password" column md={1}>
                                Password
                            </Form.Label>
                            <Col md={3}>
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
                </Collapse>
            </Row>

        </>
    );
}

export default AppOverview;