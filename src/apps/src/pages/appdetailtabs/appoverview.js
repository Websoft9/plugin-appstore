import cockpit from "cockpit";
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const _ = cockpit.gettext;

const AppOverview = (props): React$Element<React$FragmentType> => {
    const navigate = useNavigate(); //用于页面跳转

    return (
        <Row>
            <Col xs={12}>
                <Card>
                    <Card.Body>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default AppOverview;