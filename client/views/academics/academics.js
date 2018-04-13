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
import { Table, Form, FormControl, FormGroup, Col, Checkbox, ControlLabel, Button, PageHeader, Panel } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead';

class About extends React.Component {

  componentDidMount() {
    document.title = 'FInd a Student';
  }

  render() {
    return (
        <Layout>
            <PageHeader style={{ color: '#7a1222' }}>
                Academics
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
                    <Panel.Title componentClass="h3">Academic Details</Panel.Title>
                </Panel.Heading>
                <Panel.Body><Form horizontal style={{ marginTop: '10px' }}>
                    <FormGroup controlId="schoolName">
                        <Col componentClass={ControlLabel} sm={2}>
                            School Name
    </Col>
                        <Col sm={10}>
                            <FormControl placeholder="School Name" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="counselor">
                        <Col componentClass={ControlLabel} sm={2}>
                            Counselor
    </Col>
                        <Col sm={10}>
                            <FormControl placeholder="Counselor" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="graduationDate">
                        <Col componentClass={ControlLabel} sm={2}>
                            Expected Graduation Date
    </Col>
                        <Col sm={10}>
                            <FormControl placeholder="Graduation Date" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="cluster">
                        <Col componentClass={ControlLabel} sm={2}>
                             Academy / Career Cluster
    </Col>
                        <Col sm={10}>
                            <FormControl placeholder="Cluster" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">Update</Button>
                        </Col>
                    </FormGroup>
                </Form>
                    <Table responsive style={{ marginTop: '10px' }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Q1</th>
                                <th>Q2</th>
                                <th>Q3</th>
                                <th>Q4</th>
                                <th>Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>GPA</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                            <tr>
                                <td>Disp</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                            <tr>
                                <td>Abscence</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                            <tr>
                                <td>Fails</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                        </tbody>
                    </Table>
                   </Panel.Body>
            </Panel>
           
      </Layout>
    );
  }

}

export default About;
