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
import { Table, Form, FormControl, FormGroup, Col, Checkbox, ControlLabel, Button, PageHeader, Panel, Glyphicon, Row } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead';
import AddStudentModal from '../../components/AddStudentModal'

const academics = [{
    "AcademicID": 1001,
    "GPA": '3.4',
    "DisciplinaryAction": "false",
    "UnexcusedAbsences": 2,
    "FailedClasses": 3,
    "TotalClasses": 6,
    "TotalClassesComment": null,
    "FailedClassesComment": null,
    "DisplinaryActionComment": "No issues this year",
    "UnexecusedAbsencesComment": "Overslept",
    "QuarterID": 1,
    "StudentID": 1017,
    "YearID": 8,
    "StudentPhoto": null,
    "SchoolID": null
}];

const demographics = {
    "SchoolName": "Buena Vista Elementary",
    "Counselor": 'Mrs Jones',
    "ExpectedGraduationDate": "05/2021",
    "cluster": 'technology'
};

class About extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.renderTable = this.renderTable.bind(this);
        this.renderAddStudentModal = this.renderAddStudentModal.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);

        this.state = {
            showAddStudentModal: false,
            academics: {},
            demographics: {},
            students: [
                {
                    "id": 0,
                    "FName": "",
                    "LName": "",
                    "EntityName": "SaLT",
                    "CreatedDate": "2018-04-12T00:00:00"
                },
                {
                    "id": 0,
                    "FName": "",
                    "LName": "",
                    "EntityName": "Dinner & Devo",
                    "CreatedDate": "2018-04-12T00:00:00"
                },
                {
                    "id": 0,
                    "FName": "",
                    "LName": "",
                    "EntityName": "Calvin House Youth",
                    "CreatedDate": "2018-04-12T00:00:00"
                },
                {
                    "id": 0,
                    "FName": "",
                    "LName": "",
                    "EntityName": "After School Programming",
                    "CreatedDate": "2018-04-12T00:00:00"
                },
                {
                    "id": 0,
                    "FName": "",
                    "LName": "",
                    "EntityName": "PTM Life",
                    "CreatedDate": "2018-04-12T00:00:00"
                },
                {
                    "id": 0,
                    "FName": "",
                    "LName": "",
                    "EntityName": "Breakfast and Bible Study",
                    "CreatedDate": "2018-04-12T00:00:00"
                },
                {
                    "id": 0,
                    "FName": "",
                    "LName": "",
                    "EntityName": "Lunchmate Mentoring",
                    "CreatedDate": "2018-04-12T00:00:00"
                },
                {
                    "id": 0,
                    "FName": "",
                    "LName": "",
                    "EntityName": "Other",
                    "CreatedDate": "2018-04-12T00:00:00"
                },
                {
                    "id": 1,
                    "FName": "Sylvan",
                    "LName": "Tate",
                    "EntityName": null,
                    "CreatedDate": "2018-04-12T21:04:38.927"
                },
                {
                    "id": 2,
                    "FName": "Butch",
                    "LName": "Dom",
                    "EntityName": null,
                    "CreatedDate": "2018-04-12T00:00:00"
                },
                {
                    "id": 3,
                    "FName": "Kelly",
                    "LName": "Crump",
                    "EntityName": null,
                    "CreatedDate": "2018-04-12T21:22:41.523"
                },
                {
                    "id": 4,
                    "FName": "Josh",
                    "LName": "Yale",
                    "EntityName": null,
                    "CreatedDate": "2018-04-12T21:25:17.447"
                },
                {
                    "id": 5,
                    "FName": "Ron",
                    "LName": "Barden",
                    "EntityName": null,
                    "CreatedDate": "2018-04-12T21:27:52.463"
                },
                {
                    "id": 6,
                    "FName": "Captain",
                    "LName": "Awesome",
                    "EntityName": "Test",
                    "CreatedDate": null
                },
                {
                    "id": 7,
                    "FName": "Captain",
                    "LName": "Awesome",
                    "EntityName": "Test",
                    "CreatedDate": null
                },
                {
                    "id": 8,
                    "FName": "Captain",
                    "LName": "Awesome",
                    "EntityName": "Test",
                    "CreatedDate": null
                },
                {
                    "id": 9,
                    "FName": "Captain",
                    "LName": "Awesome",
                    "EntityName": "Test",
                    "CreatedDate": null
                }
            ]
        };
    }

  componentDidMount() {
    document.title = 'Academics';
  }

  handleShowModal() {
      this.setState({showAddStudentModal: true})
  }

  handleModalClose() {
      this.setState({ showAddStudentModal: false })
  }

  render() {
    return (
        <Layout>
            <PageHeader style={{ color: '#7a1222' }}>
                Academics
            </PageHeader>
            <Row>
              <Col xs={12} md={8}>
                  {this.renderTypeahead() }
              </Col>
              <Col xs={6} md={4}>
                  <Button onClick={ this.handleShowModal }>
                    <Glyphicon glyph="plus" />
                  </Button>
              </Col>
            </Row>
            <Row>
            <Panel style={{marginTop: '10px'}}>
                <Panel.Heading style={{ backgroundColor: '#f0b92b', color: '#7a1222' }}>
                </Panel.Heading>
                <Panel.Body>
                    { this.renderAddStudentModal()}
                    { this.renderForm() }
                    { this.renderTable() }
                   </Panel.Body>
            </Panel>
           </Row>
      </Layout>
    );
  }

  renderForm() {
      return (
          <Form horizontal style={{ marginTop: '10px' }}>
              <FormGroup controlId="schoolName">
                  <Col componentClass={ControlLabel} sm={2}>
                      School Name
                  </Col>
                  <Col sm={10}>
                      <FormControl placeholder="School Name" value={this.state.demographics.SchoolName || ''} />
                  </Col>
              </FormGroup>

              <FormGroup controlId="counselor">
                  <Col componentClass={ControlLabel} sm={2}>
                      Counselor
                  </Col>
                  <Col sm={10}>
                      <FormControl placeholder="Counselor" value={this.state.demographics.Counselor || ''} />
                  </Col>
              </FormGroup>
              <FormGroup controlId="graduationDate">
                  <Col componentClass={ControlLabel} sm={2}>
                      Expected Graduation Date
                  </Col>
                  <Col sm={10}>
                      <FormControl placeholder="Graduation Date" value={this.state.demographics.ExpectedGraduationDate || ''} />
                  </Col>
              </FormGroup>
              <FormGroup controlId="cluster">
                  <Col componentClass={ControlLabel} sm={2}>
                      Academy / Career Cluster
                  </Col>
                  <Col sm={10}>
                      <FormControl placeholder="Cluster" value={this.state.demographics.ExpectedGraduationDate || ''} />
                  </Col>
              </FormGroup>
              <FormGroup>
                  <Col smOffset={2} sm={10}>
                      <Button type="submit">Update</Button>
                  </Col>
              </FormGroup>
          </Form>
      )
  }

  renderAddStudentModal() {
      return (
          <AddStudentModal showModal={ this.state.showAddStudentModal } handleHide={ this.handleModalClose } />
      );
  }

  renderTable() {
      return (
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
                      <td>{this.state.academics.GPA || ''}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>

                  </tr>
                  <tr>
                      <td>Disp</td>
                      <td>{this.state.academics.DisciplinaryAction || ''}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                  </tr>
                  <tr>
                      <td>Abscence</td>
                      <td>{this.state.academics.UnexcusedAbsences || ''}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                  </tr>
                  <tr>
                      <td>Fails</td>
                      <td>{this.state.academics.FailedClasses || ''}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                  </tr>
              </tbody>
          </Table> 
      )
  }//renderTable

  renderTypeahead() {
      return (
          <Typeahead
              onChange={(selected) => {
                  this.setState({ academics, demographics })
              }}
              labelKey={option => `${option.FName} ${option.LName}`}
              options={this.state.students}
              placeholder="Find Student"
              style={{ marginTop: '10px' }}
          />
      )
  }
}

export default About;
