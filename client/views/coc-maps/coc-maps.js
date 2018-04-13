/**
 * ASP.NET Core Starter Kit (https://dotnetreact.com)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import { Table, Form, FormControl, FormGroup, Col, Checkbox, ControlLabel, Button, Row, PageHeader, Panel, Modal } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead';
import PieChart from "react-svg-piechart"

const data = [
    { title: "Data 1", value: 100, color: "#337ab7" },
    { title: "Data 2", value: 60, color: "#3c763d" },
    { title: "Data 3", value: 30, color: "#bce8f1" },
    { title: "Data 4", value: 20, color: "#faebcc" },
    { title: "Data 5", value: 10, color: "ebccd1" },
];


class About extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            modalHeder: '',
            selectedStudent:{},
            students: [
                {
                    "LName": "Bradford",
                    "FName": "Darresha",
                    "ID": 1017,
                    "EntityID": "2018-04-12T21:04:38.927",
                    "StudentID": 1017,
                    "CurrentGrade": "10th",
                    "COCFacilitator": 1022,
                    "CreatedDate": "2018-04-12T21:34:12.543",
                    "StreetAddress": "123 Tennessee Ave",
                    "PhoneNumber": "615-369-0001",
                    "DOB": "2002-04-12",
                    "PrimaryParentID": 1020,
                    "SecondaryParentID": 1021,
                    "PrimaryParentName": "John Doe",
                    "SecondaryParentName": "Jane Doe",
                    "SecondaryParentID": 1021,
                    "PrimaryParentPhone": "615-123-7890",
                    "SecondaryParentPhone": "615-456-2345",
                    "PrimaryParentEmail": "fakeemail@hotmail.com",
                    "SecondaryParentEmail": "anotherfakeemail@gmail.com",
                    "StudentEmail": "studentemail@yahoo.com",
                    "charts": {
                        "caringAdults": [
                            { title: "Data 1", value: 5, color: "#337ab7" },
                            { title: "Data 2", value: 10, color: "#3c763d" },
                            { title: "Data 3", value: 15, color: "#bce8f1" },
                            { title: "Data 4", value: 20, color: "#faebcc" },
                            { title: "Data 5", value: 25, color: "ebccd1" },
                        ],
                        "workCompentencies": [
                            { title: "Data 1", value: 10, color: "#337ab7" },
                            { title: "Data 2", value: 20, color: "#3c763d" },
                            { title: "Data 3", value: 30, color: "#bce8f1" },
                            { title: "Data 4", value: 40, color: "#faebcc" },
                            { title: "Data 5", value: 50, color: "ebccd1" },
                        ],
                        "peerGroups": [
                            { title: "Data 1", value: 7, color: "#337ab7" },
                            { title: "Data 2", value: 14, color: "#3c763d" },
                            { title: "Data 3", value: 21, color: "#bce8f1" },
                            { title: "Data 4", value: 28, color: "#faebcc" },
                            { title: "Data 5", value: 35, color: "ebccd1" },
                        ],
                        "enrichingExperiences": [
                            { title: "Data 1", value: 30, color: "#337ab7" },
                            { title: "Data 2", value: 60, color: "#3c763d" },
                            { title: "Data 3", value: 90, color: "#bce8f1" },
                            { title: "Data 4", value: 120, color: "#faebcc" },
                            { title: "Data 5", value: 150, color: "ebccd1" },
                        ],
                        "self": [
                            { title: "Data 1", value: 8, color: "#337ab7" },
                            { title: "Data 2", value: 16, color: "#3c763d" },
                            { title: "Data 3", value: 24, color: "#bce8f1" },
                            { title: "Data 4", value: 32, color: "#faebcc" },
                            { title: "Data 5", value: 40, color: "ebccd1" },
                        ],
                        "purpose": [
                            { title: "Data 1", value: 50, color: "#337ab7" },
                            { title: "Data 2", value: 100, color: "#3c763d" },
                            { title: "Data 3", value: 150, color: "#bce8f1" },
                            { title: "Data 4", value: 200, color: "#faebcc" },
                            { title: "Data 5", value: 250, color: "ebccd1" },
                        ]
                    }
                },
                {
                    "LName": "Robertson",
                    "FName": "Ar'Kee",
                    "ID": 1019,
                    "EntityID": "2018-04-12T00:00:00",
                    "StudentID": 1019,
                    "CurrentGrade": "6th",
                    "COCFacilitator": 1022,
                    "CreatedDate": "2018-04-12T21:41:01.263",
                    "StreetAddress": "123 Tennessee Ave",
                    "PhoneNumber": "615-369-0001",
                    "PrimaryParentName": "John Doe",
                    "SecondaryParentName": "Jane Doe",
                    "DOB": "2002-04-12",
                    "PrimaryParentID": 1020,
                    "SecondaryParentID": 1021,
                    "PrimaryParentPhone": "615-123-7890",
                    "SecondaryParentPhone": "615-456-2345",
                    "PrimaryParentEmail": "fakeemail@hotmail.com",
                    "SecondaryParentEmail": "anotherfakeemail@gmail.com",
                    "StudentEmail": "studentemail@yahoo.com",
                    "charts": {
                        "caringAdults": [
                            { title: "Data 1", value: 5, color: "#337ab7" },
                            { title: "Data 2", value: 10, color: "#3c763d" },
                            { title: "Data 3", value: 15, color: "#bce8f1" },
                            { title: "Data 4", value: 20, color: "#faebcc" },
                            { title: "Data 5", value: 25, color: "ebccd1" },
                        ],
                        "workCompentencies": [
                            { title: "Data 1", value: 10, color: "#337ab7" },
                            { title: "Data 2", value: 20, color: "#3c763d" },
                            { title: "Data 3", value: 30, color: "#bce8f1" },
                            { title: "Data 4", value: 40, color: "#faebcc" },
                            { title: "Data 5", value: 50, color: "ebccd1" },
                        ],
                        "peerGroups": [
                            { title: "Data 1", value: 7, color: "#337ab7" },
                            { title: "Data 2", value: 14, color: "#3c763d" },
                            { title: "Data 3", value: 21, color: "#bce8f1" },
                            { title: "Data 4", value: 28, color: "#faebcc" },
                            { title: "Data 5", value: 35, color: "ebccd1" },
                        ],
                        "enrichingExperiences": [
                            { title: "Data 1", value: 30, color: "#337ab7" },
                            { title: "Data 2", value: 60, color: "#3c763d" },
                            { title: "Data 3", value: 90, color: "#bce8f1" },
                            { title: "Data 4", value: 120, color: "#faebcc" },
                            { title: "Data 5", value: 150, color: "ebccd1" },
                        ],
                        "self": [
                            { title: "Data 1", value: 8, color: "#337ab7" },
                            { title: "Data 2", value: 16, color: "#3c763d" },
                            { title: "Data 3", value: 24, color: "#bce8f1" },
                            { title: "Data 4", value: 32, color: "#faebcc" },
                            { title: "Data 5", value: 40, color: "ebccd1" },
                        ],
                        "purpose": [
                            { title: "Data 1", value: 50, color: "#337ab7" },
                            { title: "Data 2", value: 100, color: "#3c763d" },
                            { title: "Data 3", value: 150, color: "#bce8f1" },
                            { title: "Data 4", value: 200, color: "#faebcc" },
                            { title: "Data 5", value: 250, color: "ebccd1" },
                        ]
                    }
                }
            ]
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow(modalHeder) {
        this.setState({
            show: true, modalHeder
        });
    }

  componentDidMount() {
    document.title = 'Find a Student';
  }

  render() {
    return (
        <Layout>
            <PageHeader style={{ color: '#7a1222' }}>
                COC Maps
            </PageHeader>
            <Typeahead
                onChange={(selected) => {
                    // Handle selections...
                }}
                options={[ /* Array of objects or strings */]}
                placeholder="Find Student"
                style={{marginTop:'10px'}}
            />
            <Panel style={{marginTop: '10px'}}>
                <Panel.Heading style={{ backgroundColor: '#f0b92b', color: '#7a1222' }}>
                </Panel.Heading>
                <Panel.Body>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.state.modalHeder}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row className="show-grid" style={{ marginTop: '20px' }}>
                                <Col xs={6} md={4}>
                                </Col>
                                <Col xs={6} md={4}>
                              <Panel bsStyle="primary" bsSize="large" >
                                <Panel.Heading>
                                </Panel.Heading>
                                <Panel.Body>
                                    <PieChart
                                        data={data}
                                        // If you need expand on hover (or touch) effect
                                        expandOnHover
                                        onSectorHover={(d, i, e) => {
                                            if (d) {
                                                console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                                            } else {
                                                console.log("Mouse leave - Index:", i, "Event:", e)
                                            }
                                        }
                                        }
                                    />
                                </Panel.Body>
                                    </Panel>
                                </Col>
                                <Col xs={6} md={4}>
                                </Col>
                                </Row>
                            <Form>
                                <FormGroup>
                                    <ControlLabel>{this.state.modalHeder}</ControlLabel>
                                    <FormControl.Static>email@example.com</FormControl.Static>
                                </FormGroup>
                                <FormGroup controlId="formControlsSelect">
                                    <ControlLabel>Current Status</ControlLabel>
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="select">select</option>
                                        <option value="other">...</option>
                                    </FormControl>
                                </FormGroup>
                                <FormGroup controlId="formControlsTextarea">
                                    <ControlLabel>Comments</ControlLabel>
                                    <FormControl componentClass="textarea" placeholder="textarea" />
                                </FormGroup>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                  <Row className="show-grid" style={{ marginTop: '20px' }}>
                    <Col xs={6} md={4}>
                            <Panel bsStyle="primary" onClick={() => this.handleShow('Caring Adults')}>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Caring Adults</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                {this.state.selectedStudent && this.state.selectedStudent.charts.caringAdults ? < PieChart
                                        data={this.state.selectedStudent.charts.caringAdults}
                                        // If you need expand on hover (or touch) effect
                                        expandOnHover
                                        onSectorHover={(d, i, e) => {
                                            if (d) {
                                                console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                                            } else {
                                                console.log("Mouse leave - Index:", i, "Event:", e)
                                            }
                                        }
                                        }
                                    /> : ''}
                            </Panel.Body>
                        </Panel>
                    </Col>
                    <Col xs={6} md={4}>
                            <Panel bsStyle="success" onClick={() => this.handleShow('Work Ready Compentence')}>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Work Ready Compentence</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                {this.state.selectedStudent && this.state.selectedStudent.charts.workCompentencies ? < PieChart
                                    data={this.state.selectedStudent.charts.workCompentencies}
                                    // If you need expand on hover (or touch) effect
                                    expandOnHover
                                    onSectorHover={(d, i, e) => {
                                        if (d) {
                                            console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                                        } else {
                                            console.log("Mouse leave - Index:", i, "Event:", e)
                                        }
                                    }
                                    }
                                /> : ''}
                            </Panel.Body>
                        </Panel>
                    </Col>
                    <Col xs={6} md={4}>
                            <Panel bsStyle="warning" onClick={() => this.handleShow('Positive Peer Groups')}>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Positive Peer Groups</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                {this.state.selectedStudent && this.state.selectedStudent.charts.peerGroups ? < PieChart
                                        data={this.state.selectedStudent.charts.peerGroups}
                                    // If you need expand on hover (or touch) effect
                                    expandOnHover
                                    onSectorHover={(d, i, e) => {
                                        if (d) {
                                            console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                                        } else {
                                            console.log("Mouse leave - Index:", i, "Event:", e)
                                        }
                                    }
                                    }
                                /> : ''}
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
                    <Row className="show-grid">
                        <Col xs={6} md={4}>
                            <Panel bsStyle="info" onClick={() => this.handleShow('Enriching Experiences')}>
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">Enriching Experiences</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>
                                    {this.state.selectedStudent && this.state.selectedStudent.charts.enrichingExperiences ? < PieChart
                                        data={this.state.selectedStudent.charts.enrichingExperiences}
                                        // If you need expand on hover (or touch) effect
                                        expandOnHover
                                        onSectorHover={(d, i, e) => {
                                            if (d) {
                                                console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                                            } else {
                                                console.log("Mouse leave - Index:", i, "Event:", e)
                                            }
                                        }
                                        }
                                    /> : ''}
                                </Panel.Body>
                            </Panel>
                        </Col>
                        <Col xs={6} md={4}>
                            <Panel bsStyle="danger" onClick={() => this.handleShow('Self')}>
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">Self</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>
                                    {this.state.selectedStudent && this.state.selectedStudent.charts.self ? < PieChart
                                        data={this.state.selectedStudent.charts.self}
                                        // If you need expand on hover (or touch) effect
                                        expandOnHover
                                        onSectorHover={(d, i, e) => {
                                            if (d) {
                                                console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                                            } else {
                                                console.log("Mouse leave - Index:", i, "Event:", e)
                                            }
                                        }
                                        }
                                    /> : ''}
                                </Panel.Body>
                            </Panel>
                        </Col>
                        <Col xs={6} md={4}>
                            <Panel bsStyle="primary" onClick={() => this.handleShow('Purpose')}>
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">Purpose</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>
                                    {this.state.selectedStudent && this.state.selectedStudent.charts.purpose ? < PieChart
                                        data={this.state.selectedStudent.charts.purpose}
                                        // If you need expand on hover (or touch) effect
                                        expandOnHover
                                        onSectorHover={(d, i, e) => {
                                            if (d) {
                                                console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                                            } else {
                                                console.log("Mouse leave - Index:", i, "Event:", e)
                                            }
                                        }
                                        }
                                    /> : ''}
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row></Panel.Body>
            </Panel>
      </Layout>
    );
  }

}

export default About;
