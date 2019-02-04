/**
 * ASP.NET Core Starter Kit (https://dotnetreact.com)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Table, Form, FormControl, FormGroup, Col, Checkbox, ControlLabel, Button, PageHeader, Panel, Glyphicon, Row, Badge, Image } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead';
import AddStudentModal from '../../components/AddStudentModal'
import { userActions } from '../../_actions'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { css } from 'react-emotion';
import { ClimbingBoxLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;



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

const selectedUser = {
    "roles": [
      {
        "name": "Root Access",
        "description": "Global application access to all accounts",
        "policies": [
            {
                "effect": "Allow",
                "resources": [
                    "*"
                ],
                "actions": [
                    "*"
                ]
            }
        ]
      },
      {
        "name": "Global Admin Access",
        "description": "Global application access to all accounts",
        "policies": [
          {
              "effect": "Allow",
              "resources": [
                  "*"
              ],
              "actions": [
                  "*"
              ]
          }
        ]
      }
    ]
}

class Users extends React.Component  { 
    constructor(props, context) {
        super(props, context);

        this.createRole = this.createRole.bind(this);
        this.createRoles = this.createRoles.bind(this);
        this.renderAddStudentModal = this.renderAddStudentModal.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);

        this.state = {
            showAddStudentModal: false,
            academics: {},
            demographics: {},
            selectedUser
        };
            
        
    }

    componentDidMount() {
        document.title = 'Users';
        this.getUsers();
        this.getUserTypes();
    }

    handleShowModal() {
        this.setState({ showAddStudentModal: true })
    }

    handleModalClose() {
        this.setState({ showAddStudentModal: false })
    }

    render() {
        
        return (
            <Layout>
                <PageHeader style={{ color: '#7a1222' }}>
                    Users
            </PageHeader>
                <Row>
                    <Col xs={12} md={8}>
                        {this.renderTypeahead()}
                    </Col>
                    <Col xs={6} md={4}>
                        <Button onClick={this.handleShowModal}>
                            <Glyphicon glyph="plus" />
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Panel style={{ marginTop: '10px' }}>
                        <Panel.Heading style={{ backgroundColor: '#f0b92b', color: '#7a1222' }}>
                        </Panel.Heading>
                        <Panel.Body>
                            <ClimbingBoxLoader
                                className={override}
                                sizeUnit={"px"}
                                size={150}
                                color={'green'}
                                loading={this.isLoading()}
                            />
                            <h1> {this.state.selectedUser && this.state.selectedUser.FName && this.state.selectedUser.LName ? `${this.state.selectedUser.FName} ${this.state.selectedUser.LName}` : ''}</h1>
                            {this.renderAddStudentModal()}
                            {this.renderForm()}}
                        </Panel.Body>
                    </Panel>
                </Row>
            </Layout>
        );
    }

    createRole = (role) => {
        return <Badge>{role.name}</Badge>;
    }

    createRoles = (roles) => {
        return roles.map(this.createRole);
    }

    createUserType = (userType) => {
        return <option value={userType.EntityTypeID}>{userType.EntityTypeName}</option>;
    }

    createUserTypes = () => {
        return this.props.userTypes.map(this.createUserType);
    }

    isLoading = () => {
        return this.props.userTypesLoading || this.props.usersLoading
    }

    renderForm() {
        const selectedUser = this.state.selectedUser || {};
        return this.state.selectedUser && (
            <Form horizontal style={{ marginTop: '10px' }}>
                <Row>
                  <Col sm={4}>
                      <Panel bsStyle="info" >
                          <Panel.Heading>
                              <Panel.Title componentClass="h3">General</Panel.Title>
                          </Panel.Heading>
                          <Panel.Body style={{ padding: '20px' }}>
                              <FormGroup controlId="formControlsSelect">
                                  <ControlLabel>Title</ControlLabel>
                                  <FormControl componentClass="select" placeholder="select" value={selectedUser.Title}>
                                      <option value="select">Select Type</option>
                                      <option value="Master">Master</option>
                                      <option value="Mr.">Mr.</option>
                                      <option value="Miss">Miss</option>
                                      <option value="Mrs.">Mrs.</option>
                                      <option value="Ms.">Ms.</option>
                                      <option value="Mx.">Mx.</option>
                                  </FormControl>
                              </FormGroup>
                              <FormGroup controlId="formControlsSelect">
                                  <ControlLabel>First Name</ControlLabel>
                                  <FormControl id="formControlsText" type="text" label="Text" placeholder="" value={selectedUser.FName || ''}/>
                              </FormGroup>
                              <FormGroup controlId="formControlsSelect">
                                  <ControlLabel>Last Name</ControlLabel>
                                  <FormControl id="formControlsText" type="text" label="Text" placeholder="" value={selectedUser.LName || ''}/>
                              </FormGroup>
                              <FormGroup controlId="formControlsSelect">
                                  <ControlLabel>Email</ControlLabel>
                                  <FormControl id="formControlsText" type="text" label="Text" placeholder="" value={selectedUser.Email || ''}/>
                              </FormGroup>
                              <FormGroup controlId="formControlsSelect">
                                  <ControlLabel>Primary Phone</ControlLabel>
                                  <FormControl id="formControlsText" type="text" label="Text" placeholder="" value={selectedUser.Phone || ''}/>
                              </FormGroup>
                              <FormGroup controlId="formControlsSelect">
                                  <ControlLabel>Secondary Phone</ControlLabel>
                                  <FormControl id="formControlsText" type="text" label="Text" placeholder="" value={selectedUser.SecondaryPhone || ''}/>
                              </FormGroup>
                              <FormGroup controlId="formControlsSelect">
                                  <ControlLabel>Address1</ControlLabel>
                                  <FormControl id="formControlsText" type="text" label="Text" placeholder="" value={selectedUser.Address1 || ''}/>
                                </FormGroup>
                              <FormGroup controlId="formControlsSelect">
                                  <ControlLabel>Address2</ControlLabel>
                                  <FormControl id="formControlsText" type="text" label="Text" placeholder="" value={selectedUser.Address2 || ''} />
                              </FormGroup>
                              <FormGroup controlId="formControlsSelect">
                                  <ControlLabel>City</ControlLabel>
                                  <FormControl id="formControlsText" type="text" label="Text" placeholder="" value={selectedUser.City || ''}/>
                              </FormGroup>
                              <FormGroup controlId="formControlsSelect">
                                  <ControlLabel>State</ControlLabel>
                                  <FormControl id="formControlsText" type="text" label="Text" placeholder="" value={selectedUser.State || ''}/>
                              </FormGroup>
                              <FormGroup controlId="formControlsSelect">
                                  <ControlLabel>Zip</ControlLabel>
                                  <FormControl id="formControlsText" type="text" label="Text" placeholder="" value={selectedUser.Zip || ''}/>
                              </FormGroup>
                          </Panel.Body>
                      </Panel>
                  </Col>
                  <Col sm={4}>
                      <Panel bsStyle="info">
                          <Panel.Heading>
                              <Panel.Title componentClass="h3">Account</Panel.Title>
                          </Panel.Heading>
                          <Panel.Body style={{ padding: '20px' }}>
                              <FormGroup controlId="formControlsSelect">
                                    <ControlLabel>Type</ControlLabel>
                                    <FormControl componentClass="select" placeholder="select" value={selectedUser.EntityTypeID}>
                                        <option value="select">Select Type</option>
                                        { this.createUserTypes() }
                                    </FormControl>
                                </FormGroup>
                              <FormGroup controlId="formControlsSelect">
                                  <ControlLabel>Password</ControlLabel>
                                  <FormControl id="formControlsText" type="password" label="Text" placeholder="" value={selectedUser.password || ''}/>
                              </FormGroup>
                              <FormGroup controlId="formControlsSelect">
                                  <ControlLabel>Confirm</ControlLabel>
                                  <FormControl id="formControlsText" type="password" label="Text" placeholder="" />
                              </FormGroup>
                          </Panel.Body>
                      </Panel>
                  </Col>
                  <Col sm={4}>
                      <Panel bsStyle="info">
                          <Panel.Heading>
                              <Panel.Title componentClass="h3">Roles</Panel.Title>
                          </Panel.Heading>
                          <Panel.Body style={{ padding: '20px' }}>
                                Panel content
                          </Panel.Body>
                      </Panel>

                      </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                    </Col>
                    <Col sm={4}>
                        <Button bsStyle="primary" style={{ marginRight: '10px' }}>Save</Button>
                        <Button bsStyle="link">Cancel</Button>
                    </Col>
                    <Col sm={4}>
                    </Col>
                </Row>
            </Form>
        )
    }

    renderAddStudentModal() {
        return (
            <AddStudentModal showModal={this.state.showAddStudentModal} handleHide={this.handleModalClose} />
        );
    }

    renderTypeahead() {
        return (
            <Typeahead
                onChange={(selected) => {
                    this.setState({ selectedUser: selected[0] })
                }}
                labelKey={option => option.FName || option.LName ? `${option.FName} ${option.LName}` : option.EntityName }
                options={ this.props.users }
                isLoading={ this.props.usersLoading }
                placeholder="Find User"
                style={{ marginTop: '10px' }}
            />
        )
    }

    getUsers = () => {
        this.props.userActions.getAll();
    }

    getUserTypes = () => {
        this.props.userActions.getUserTypes();
    }
}

function mapStateToProps(state) {
    return {
        users: state.users.items || [],
        usersLoading: state.users.loading,
        userTypesLoading: state.users.userTypesLoading,
        userTypes: state.users.userTypes || []
    };
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export { Users as BaseUsersView };
export default connect(mapStateToProps, mapDispatchToProps)(Users);

