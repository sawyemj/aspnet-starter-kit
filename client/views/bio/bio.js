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
import { Table, Form, FormControl, FormGroup, Col, Checkbox, ControlLabel, Button, Image, DropdownButton, MenuItem, PageHeader, Panel, Row } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead';

class About extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
            selectedStudent: {},
            students: [
                {
                    "LName": "Johnson",
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
                    "StudentEmail": "studentemail@yahoo.com"
                },
                {
                    "LName": "Williams",
                    "FName": "Will",
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
                    "StudentEmail": "studentemail@yahoo.com"
                }
            ]
        };
    }

  componentDidMount() {
    document.title = 'FInd a Student';
  }

  render() {
    return (
        <Layout>
            <PageHeader style={{ color: '#7a1222' }}>
                Student Bio
            </PageHeader>
            <Row>

            <Col md={6} mdPush={6}>
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
            </Col>
            <Col md={6} mdPull={6}>
                <DropdownButton
                    bsStyle="default"
                    title="School Year"
                    key="1"
                    id={`dropdown-basic-1`}

                >
                    <MenuItem eventKey="1">2017-18</MenuItem>
                </DropdownButton>
                </Col>
            </Row >
            <Row>

            
            <Panel style={{ marginTop: '10px' }}>
                <Panel.Heading style={{ backgroundColor: '#f0b92b', color: '#7a1222' }}>
                   
                </Panel.Heading>
                <Panel.Body> 
                        <Form horizontal style={{ marginTop: '30px' }}>
                            <FormGroup controlId="dob">
                                <Col componentClass={ControlLabel} sm={2}>
                                    DOB
    </Col>
                                <Col sm={10}>
                                    <FormControl placeholder="DOB" value={this.state.selectedStudent && this.state.selectedStudent.DOB ? this.state.selectedStudent.DOB : ''}/>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="currentGrade">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Current Grade
    </Col>
                                <Col sm={10}>
                                    <FormControl placeholder="Current Grade" value={this.state.selectedStudent && this.state.selectedStudent.CurrentGrade ? this.state.selectedStudent.CurrentGrade : ''}/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="address">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Address
    </Col>
                                <Col sm={10}>
                                    <FormControl placeholder="Address" value={this.state.selectedStudent && this.state.selectedStudent.StreetAddress ? this.state.selectedStudent.StreetAddress : ''}/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="p1name">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Parent 1 Name
    </Col>
                                <Col sm={10}>
                                    <FormControl placeholder="Parent 1 Name" value={this.state.selectedStudent && this.state.selectedStudent.PrimaryParentName ? this.state.selectedStudent.PrimaryParentName : ''}/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="p2name">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Parent 2 Name
    </Col>
                                <Col sm={10}>
                                    <FormControl placeholder="Parent 2 Name" value={this.state.selectedStudent && this.state.selectedStudent.PrimaryParentName ? this.state.selectedStudent.SecondaryParentName : ''}/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="p1phone">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Parent 1 Phone
    </Col>
                                <Col sm={10}>
                                    <FormControl placeholder="Parent 1 Phone" value={this.state.selectedStudent && this.state.selectedStudent.PrimaryParentPhone ? this.state.selectedStudent.PrimaryParentPhone : ''}/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="p1email">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Parent 1 Email
    </Col>
                                <Col sm={10}>
                                    <FormControl placeholder="Parent 1 Email" value={this.state.selectedStudent && this.state.selectedStudent.PrimaryParentEmail ? this.state.selectedStudent.PrimaryParentEmail : ''}/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="p2phone">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Parent 2 Phone
    </Col>
                                <Col sm={10}>
                                    <FormControl placeholder="Parent 2 Phone" value={this.state.selectedStudent && this.state.selectedStudent.SecondaryParentPhone ? this.state.selectedStudent.SecondaryParentPhone : ''}/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="p2email">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Parent 2 Email
    </Col>
                                <Col sm={10}>
                                    <FormControl placeholder="Parent 2 Email" value={this.state.selectedStudent && this.state.selectedStudent.SecondaryParentEmail ? this.state.selectedStudent.SecondaryParentEmail : ''}/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="studentphone">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Student Phone
    </Col>
                                <Col sm={10}>
                                    <FormControl placeholder="Student Phone" value={this.state.selectedStudent && this.state.selectedStudent.PhoneNumber ? this.state.selectedStudent.PhoneNumber : ''}/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="studentemail">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Student Email
    </Col>
                                <Col sm={10}>
                                    <FormControl placeholder="Student Email" value={ this.state.selectedStudent && this.state.selectedStudent.StudentEmail ? this.state.selectedStudent.StudentEmail : ''}/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button type="submit">Update</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Panel.Body>
                </Panel>
            </Row>
      </Layout>
    );
  }

}

export default About;
