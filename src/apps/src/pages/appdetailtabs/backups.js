import React from 'react';
import { Button, Card, Col, Row, Table } from 'react-bootstrap';

const Backups = (props): React$Element<React$FragmentType> => {
    const records = [
        { id: 1, firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
        { id: 2, firstName: 'Jacob', lastName: 'Thornton', username: '@fat' },
        { id: 3, firstName: 'Dave', lastName: 'G', username: '@dave' },
        { id: 4, firstName: 'Nik', lastName: 'N', username: '@nikn' },
        { id: 5, firstName: 'Shreyu', lastName: 'Navadiya', username: '@sn' },
    ];

    return (
        <>
            <Row className="mb-2">
                <Col sm={12}>
                    <label className="me-1" style={{ fontWeight: "bolder", marginBottom: "5px" }}>Backups</label>
                    <p>
                        Backups are complete snapshots of the app. You can use app backups to restore or clone this app.
                    </p>
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <Card.Body>
                                    <Table className="mb-0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {records.map((record, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <th scope="row">{record.id}</th>
                                                        <td>{record.firstName}</td>
                                                        <td>{record.lastName}</td>
                                                        <td>{record.username}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Button variant="primary" style={{ float: 'right' }} >
                        Create Backup
                    </Button>
                </Col>
            </Row>
            <hr></hr>
            <Row className="mb-2">
                <Col sm={12}>
                    <label className="me-1" style={{ fontWeight: "bolder", marginBottom: "5px" }}>Automatic Backups</label>
                    <p>
                        Cloudron periodically creates a backup based on the backup settings.
                    </p>
                    <p>
                        Automatic Backups is currently enabled.
                    </p>
                    <Button variant="primary" style={{ float: "right" }} >
                        Enable Automatic Backups
                    </Button>
                </Col>
            </Row>
        </>
    );
}

export default Backups;