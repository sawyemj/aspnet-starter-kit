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
            modalHeder:''
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
                    <Panel.Title componentClass="h3">Maps</Panel.Title>
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
                                    <Panel.Title componentClass="h3">Caring Adults</Panel.Title>
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
                            <Panel bsStyle="success" onClick={() => this.handleShow('Work Ready Compentence')}>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Work Ready Compentence</Panel.Title>
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
                            <Panel bsStyle="warning" onClick={() => this.handleShow('Positive Peer Groups')}>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Positive Peer Groups</Panel.Title>
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
                </Row>
                    <Row className="show-grid">
                        <Col xs={6} md={4}>
                            <Panel bsStyle="info" onClick={() => this.handleShow('Enriching Experiences')}>
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">Enriching Experiences</Panel.Title>
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
                            <Panel bsStyle="danger" onClick={() => this.handleShow('Self')}>
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">Self</Panel.Title>
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
                            <Panel bsStyle="primary" onClick={() => this.handleShow('Self')}>
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3">Purpose</Panel.Title>
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
                    </Row></Panel.Body>
            </Panel>
      </Layout>
    );
  }

}

export default About;
