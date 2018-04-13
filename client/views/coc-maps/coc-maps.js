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
            selectedChart: 'caringAdults',
            selectedStudent:{},
            selectValue: 'select',
            students: [
                {
                    "LName": "Willimans",
                    "FName": "Jess",
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
                            { title: "At Home", value: 5, color: "blue" },
                            { title: "At School", value: 25, color: "green" },
                            { title: "At Church", value: 25, color: "green" },
                            { title: "At Work", value: 15, color: "purple" },
                            { title: "Resource Teams", value: 20, color: "orange" },
                            { title: "At PTM", value: 25, color: "green" },
                        ],
                        "workCompentencies": [
                            { title: "Communication Skills", value: 20, color: "orange" },
                            { title: "Study Skills", value: 20, color: "orange" },
                            { title: "Problem Solving Skils", value: 15, color: "purple" },
                            { title: "Financial Literacy", value: 25, color: "green" },
                            { title: "Leadership", value: 20, color: "orange" },
                            { title: "Work Experience", value: 15, color: "purple" },
                            { title: "Resource Teams", value: 5, color: "blue" },
                            { title: "STEM Exposure", value: 5, color: "blue" },
                        ],
                        "peerGroups": [
                            { title: "PTM Involvement", value: 20, color: "orange" },
                            { title: "Outside Youth Groups", value: 20, color: "orange" },
                            { title: "At School", value: 20, color: "orange" },
                            { title: "At Work", value: 15, color: "purple" },
                            { title: "At Home", value: 5, color: "blue" },
                            { title: "Resource Teams", value: 15, color: "purple" }
                        ],
                        "enrichingExperiences": [
                            { title: "Camps", value: 20, color: "orange" },
                            { title: "Cultural Exposure", value: 25, color: "green" },
                            { title: "Retreats", value: 15, color: "purple" },
                            { title: "Community Service", value: 15, color: "purple" },
                            { title: "Extracurricular School Activites", value: 5, color: "ebccd1" },
                            { title: "Field Trips", value: 5, color: "blue" },
                            { title: "Resource Teams", value: 15, color: "purple" }
                        ],
                        "self": [
                            { title: "Spiritual Gifts", value: 20, color: "orange" },
                            { title: "Talents", value: 20, color: "orange" },
                            { title: "Interests / Hobbies", value: 25, color: "green" },
                            { title: "Personality / Strengths Assesment", value: 25, color: "green" },
                            { title: "Healthy Habbits / Wellness", value: 5, color: "blue" },
                            { title: "Resource Teams", value: 20, color: "orange" }
                        ],
                        "purpose": [
                            { title: "GOD Confident", value: 25, color: "green" },
                            { title: "Dream Pursuit (Actions Taken)", value: 15, color: "purple" },
                            { title: "Resource Teams", value: 20, color: "orange" }
                        ]
                    }
                },
                {
                    "LName": "Cumberland",
                    "FName": "Shelby",
                    "ID": 1019,
                    "EntityID": "2018-04-12T00:00:00",
                    "StudentID": 1019,
                    "CurrentGrade": "6th",
                    "COCFacilitator": 1022,
                    "CreatedDate": "2018-04-12T21:41:01.263",
                    "StreetAddress": "456 Test Ave",
                    "PhoneNumber": "615-369-0001",
                    "PrimaryParentName": "John Doe",
                    "SecondaryParentName": "Jane Doe",
                    "DOB": "2007-05-12",
                    "PrimaryParentID": 1020,
                    "SecondaryParentID": 1021,
                    "PrimaryParentPhone": "615-456-7890",
                    "SecondaryParentPhone": "615-456-1224",
                    "PrimaryParentEmail": "tester@hotmail.com",
                    "SecondaryParentEmail": "bigtest@gmail.com",
                    "StudentEmail": "rob@yahoo.com",
                    "charts": {
                        "caringAdults": [
                            { title: "At Home", value: 5, color: "blue" },
                            { title: "At School", value: 25, color: "green" },
                            { title: "At Church", value: 25, color: "green" },
                            { title: "At Work", value: 15, color: "purple" },
                            { title: "Resource Teams", value: 20, color: "orange" },
                            { title: "At PTM", value: 25, color: "green" },
                        ],
                        "workCompentencies": [
                            { title: "Communication Skills", value: 20, color: "orange" },
                            { title: "Study Skills", value: 20, color: "orange" },
                            { title: "Problem Solving Skils", value: 15, color: "purple" },
                            { title: "Financial Literacy", value: 25, color: "green" },
                            { title: "Leadership", value: 20, color: "orange" },
                            { title: "Work Experience", value: 15, color: "purple" },
                            { title: "Resource Teams", value: 5, color: "blue" },
                            { title: "STEM Exposure", value: 5, color: "blue" },
                        ],
                        "peerGroups": [
                            { title: "PTM Involvement", value: 20, color: "orange" },
                            { title: "Outside Youth Groups", value: 20, color: "orange" },
                            { title: "At School", value: 20, color: "orange" },
                            { title: "At Work", value: 15, color: "purple" },
                            { title: "At Home", value: 5, color: "blue" },
                            { title: "Resource Teams", value: 15, color: "purple" }
                        ],
                        "enrichingExperiences": [
                            { title: "Camps", value: 20, color: "orange" },
                            { title: "Cultural Exposure", value: 25, color: "green" },
                            { title: "Retreats", value: 15, color: "purple" },
                            { title: "Community Service", value: 15, color: "purple" },
                            { title: "Extracurricular School Activites", value: 5, color: "blue" },
                            { title: "Field Trips", value: 5, color: "blue" },
                            { title: "Resource Teams", value: 15, color: "purple" }
                        ],
                        "self": [
                            { title: "Spiritual Gifts", value: 20, color: "orange" },
                            { title: "Talents", value: 20, color: "orange" },
                            { title: "Interests / Hobbies", value: 25, color: "green" },
                            { title: "Personality / Strengths Assesment", value: 25, color: "green" },
                            { title: "Healthy Habbits / Wellness", value: 5, color: "blue" },
                            { title: "Resource Teams", value: 20, color: "orange" }
                        ],
                        "purpose": [
                            { title: "GOD Confident", value: 25, color: "green" },
                            { title: "Dream Pursuit (Actions Taken)", value: 15, color: "purple" },
                            { title: "Resource Teams", value: 20, color: "orange" }
                        ]
                    }
                }
            ]
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow(modalHeder, selectValue) {
        this.setState({
            show: true,
            modalHeder,
            selectValue
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
                    console.log(selected)
                    this.setState({ selectedStudent: selected[0] })
                }}
                labelKey={option => `${option.FName} ${option.LName}`}
                options={this.state.students}
                placeholder="Find Student"
                style={{ marginTop: '10px' }}
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
                            <Form>
                                <FormGroup controlId="formControlsSelect" >
                                    <ControlLabel>Current Status</ControlLabel>
                                    <FormControl componentClass="select" placeholder="select" value={this.state.selectValue}>
                                        <option value="select">Select Status</option>
                                        <option value="25">Yes</option>
                                        <option value="15">Resource Teams</option>
                                        <option value="20">Action Needed</option>
                                        <option value="5">None</option>
                                    </FormControl>
                                </FormGroup>
                                <FormGroup controlId="formControlsTextarea">
                                    <ControlLabel>Comments</ControlLabel>
                                    <FormControl componentClass="textarea" placeholder="textarea" />
                                </FormGroup>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleClose}>Update</Button>
                        </Modal.Footer>
                    </Modal>
                  <Row className="show-grid" style={{ marginTop: '20px' }}>
                    <Col xs={6} md={4}>
                            <Panel bsStyle="primary" >
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Caring Adults</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                    {this.state.selectedStudent && this.state.selectedStudent.charts && this.state.selectedStudent.charts.caringAdults ? < PieChart
                                        data={this.state.selectedStudent.charts.caringAdults}
                                        // If you need expand on hover (or touch) effect
                                        expandOnHover
                                        onSectorHover={(d, i, e) => {
                                            if (d) {
                                                setTimeout(function () { this.handleShow(d.title, d.value.toString()); }.bind(this), 5000);
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
                            <Panel bsStyle="success">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Work Ready Compentence</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                    {this.state.selectedStudent && this.state.selectedStudent.charts && this.state.selectedStudent.charts.workCompentencies ? < PieChart
                                    data={this.state.selectedStudent.charts.workCompentencies}
                                    // If you need expand on hover (or touch) effect
                                    expandOnHover
                                    onSectorHover={(d, i, e) => {
                                        if (d) {
                                            setTimeout(function () { this.handleShow(d.title, d.value.toString()); }.bind(this), 5000);
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
                            <Panel bsStyle="warning">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Positive Peer Groups</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                    {this.state.selectedStudent && this.state.selectedStudent.charts && this.state.selectedStudent.charts.peerGroups ? < PieChart
                                        data={this.state.selectedStudent.charts.peerGroups}
                                    // If you need expand on hover (or touch) effect
                                    expandOnHover
                                    onSectorHover={(d, i, e) => {
                                        if (d) {
                                            setTimeout(function () { this.handleShow(d.title, d.value.toString()); }.bind(this), 5000);
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
                            <Panel bsStyle="info">
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">Enriching Experiences</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>
                                    {this.state.selectedStudent && this.state.selectedStudent.charts && this.state.selectedStudent.charts.enrichingExperiences ? < PieChart
                                        data={this.state.selectedStudent.charts.enrichingExperiences}
                                        // If you need expand on hover (or touch) effect
                                        expandOnHover
                                        onSectorHover={(d, i, e) => {
                                            if (d) {
                                                setTimeout(function () { this.handleShow(d.title, d.value.toString()); }.bind(this), 5000);
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
                            <Panel bsStyle="danger" >
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">Self</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>
                                    {this.state.selectedStudent && this.state.selectedStudent.charts && this.state.selectedStudent.charts.self ? < PieChart
                                        data={this.state.selectedStudent.charts.self}
                                        // If you need expand on hover (or touch) effect
                                        expandOnHover
                                        onSectorHover={(d, i, e) => {
                                            if (d) {
                                                setTimeout(function () { this.handleShow(d.title, d.value.toString()); }.bind(this), 5000);
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
                            <Panel bsStyle="primary" >
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">Purpose</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body>
                                    {this.state.selectedStudent && this.state.selectedStudent.charts && this.state.selectedStudent.charts.purpose ? < PieChart
                                        data={this.state.selectedStudent.charts.purpose}
                                        // If you need expand on hover (or touch) effect
                                        expandOnHover
                                        onSectorHover={(d, i, e) => {
                                            if (d) {
                                                setTimeout(function () { this.handleShow(d.title, d.value.toString()); }.bind(this), 5000);
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
