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
import { Table, Form, FormControl, FormGroup, Col, Checkbox, ControlLabel, Button, Image, DropdownButton, MenuItem, PageHeader, Panel } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead';

class About extends React.Component {

  componentDidMount() {
    document.title = 'FInd a Student';
  }

  render() {
    return (
        <Layout>
            <PageHeader style={{ color: '#7a1222' }}>
                Student Bio
            </PageHeader>
            <Typeahead
                onChange={(selected) => {
                    // Handle selections...
                }}
                options={[ /* Array of objects or strings */]}
                placeholder="Find Student"
                style={{ marginTop: '10px' }}
            />
            <Panel style={{ marginTop: '10px' }}>
                <Panel.Heading style={{ backgroundColor: '#f0b92b', color: '#7a1222' }}>
                    <Panel.Title componentClass="h3">Details</Panel.Title>
                </Panel.Heading>
                <Panel.Body> <Col xs={6} md={4} style={{ marginTop: '10px' }}>
                    <h2>John Student</h2>
                    <Image src="C:\Users\PTMdeveloper\Desktop\CirlcesOfConnection\client\views\bio\bf5_0.png" rounded />
                </Col>
                    <Col xs={12} md={8}>
                        <Form horizontal style={{ marginTop: '30px' }}>
                            <FormGroup controlId="dob" >
                                <DropdownButton
                                    bsStyle="default"
                                    title="School Year"
                                    key="1"
                                    id={`dropdown-basic-1`}
                                    
                                >
                                    <MenuItem eventKey="1">2017-18</MenuItem>
                                </DropdownButton>
                            </FormGroup>
                            <FormGroup controlId="dob">
                                <Col componentClass={ControlLabel} sm={2}>
                                    DOB
    </Col>
                                <Col sm={10}>
                                    <FormControl placeholder="DOB" />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="currentGrade">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Current Grade
    </Col>
                                <Col sm={10}>
                                    <FormControl placeholder="Current Grade" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="address">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Address
    </Col>
                                <Col sm={10}>
                                    <FormControl placeholder="Address" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="p1name">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Parent 1 Name
    </Col>
                                <Col sm={10}>
                                    <FormControl placeholder="Parent 1 Name" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="p2name">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Parent 2 Name
    </Col>
                                <Col sm={10}>
                                    <FormControl placeholder="Parent 2 Name" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="p1phone">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Parent 1 Phone
    </Col>
                                <Col sm={10}>
                                    <FormControl placeholder="Parent 1 Phone" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="p1email">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Parent 1 Email
    </Col>
                                <Col sm={10}>
                                    <FormControl placeholder="Parent 1 Email" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="p2phone">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Parent 2 Phone
    </Col>
                                <Col sm={10}>
                                    <FormControl placeholder="Parent 2 Phone" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="p2email">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Parent 2 Email
    </Col>
                                <Col sm={10}>
                                    <FormControl placeholder="Parent 2 Email" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="studentphone">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Student Phone
    </Col>
                                <Col sm={10}>
                                    <FormControl placeholder="Student Phone" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="studentemail">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Student Email
    </Col>
                                <Col sm={10}>
                                    <FormControl placeholder="Student Email" />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button type="submit">Update</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col></Panel.Body>
            </Panel>
      </Layout>
    );
  }

}

export default About;
