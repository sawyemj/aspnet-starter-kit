/**
 * ASP.NET Core Starter Kit (https://dotnetreact.com)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import { Table, Form, FormControl, FormGroup, Col, Checkbox, ControlLabel, Button, Image, DropdownButton, MenuItem, PageHeader, Panel, Row } from 'react-bootstrap';

class AddStudentForm extends React.Component {

  static propTypes = {
      className: PropTypes.string,
      selectedStudent: PropTypes.object,
      isAdding: PropTypes.boolean
  };

  constructor(props, context) {
    super(props, context);
    this.getValue = this.getValue.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
        selectedStudent: this.props.selectedStudent || {}
    }
  }

  render() {
    const { className, ...other } = this.props;
    return (
        <Form horizontal style={{ marginTop: '30px' }}>
            <FormGroup controlId="dob">
                <Col componentClass={ControlLabel} sm={2}>
                    DOB
                </Col>
                <Col sm={10}>
                    <FormControl placeholder="DOB" name="DOB" value={this.getValue('selectedStudent', 'DOB')} onChange={ this.handleChange }/>
                </Col>
            </FormGroup>
            <FormGroup controlId="currentGrade">
                <Col componentClass={ControlLabel} sm={2}>
                    Current Grade
                </Col>
                <Col sm={10}>
                    <FormControl placeholder="Current Grade" name="CurrentGrade" value={this.getValue('selectedStudent', 'CurrentGrade')} onChange={this.handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup controlId="address">
                <Col componentClass={ControlLabel} sm={2}>
                    Address
                </Col>
                <Col sm={10}>
                    <FormControl placeholder="Address" name="StreetAddress" value={this.getValue('selectedStudent', 'StreetAddress')} onChange={this.handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup controlId="p1name">
                <Col componentClass={ControlLabel} sm={2}>
                    Parent 1 Name
                </Col>
                <Col sm={10}>
                    <FormControl placeholder="Parent 1 Name" name="PrimaryParentName" value={this.getValue('selectedStudent', 'PrimaryParentName')} onChange={this.handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup controlId="p1phone">
                <Col componentClass={ControlLabel} sm={2}>
                    Parent 1 Phone
                </Col>
                <Col sm={10}>
                    <FormControl placeholder="Parent 1 Phone" name="PrimaryParentPhone" value={this.getValue('selectedStudent', 'PrimaryParentPhone')} onChange={this.handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup controlId="p1email">
                <Col componentClass={ControlLabel} sm={2}>
                    Parent 1 Email
                </Col>
                <Col sm={10}>
                    <FormControl placeholder="Parent 1 Email" name="PrimaryParentEmail" value={this.getValue('selectedStudent', 'PrimaryParentEmail')} onChange={this.handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup controlId="p2name">
                <Col componentClass={ControlLabel} sm={2}>
                    Parent 2 Name
                </Col>
                <Col sm={10}>
                    <FormControl placeholder="Parent 2 Name" name="SecondaryParentName" value={this.getValue('selectedStudent', 'SecondaryParentName')} onChange={this.handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup controlId="p2phone">
                <Col componentClass={ControlLabel} sm={2}>
                    Parent 2 Phone
                </Col>
                <Col sm={10}>
                    <FormControl placeholder="Parent 2 Phone" name="SecondaryParentPhone" value={this.getValue('selectedStudent', 'SecondaryParentPhone')} onChange={this.handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup controlId="p2email">
                <Col componentClass={ControlLabel} sm={2}>
                    Parent 2 Email
                </Col>
                <Col sm={10}>
                    <FormControl placeholder="Parent 2 Email" name="SecondaryParentEmail" value={this.getValue('selectedStudent', 'SecondaryParentEmail')} onChange={this.handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup controlId="studentphone">
                <Col componentClass={ControlLabel} sm={2}>
                    Student Phone
                </Col>
                <Col sm={10}>
                    <FormControl placeholder="Student Phone" name='PhoneNumber' value={this.getValue('selectedStudent', 'PhoneNumber')} onChange={this.handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup controlId="studentemail">
                <Col componentClass={ControlLabel} sm={2}>
                    Student Email
                </Col>
                <Col sm={10}>
                    <FormControl placeholder="Student Email" name='StudentEmail' value={this.getValue('selectedStudent', 'StudentEmail')} onChange={this.handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup>
                <Col smOffset={2} sm={10}>
                    <Button type="submit">Add</Button>
                </Col>
            </FormGroup>
        </Form>
    );
  }//render

  getValue = (stateObj, value) => {
      return this.state[stateObj] && this.state[stateObj][value] ? this.state[stateObj][value] : ''
  }

  handleChange = (event) => {
      let fieldName = event.target.name;
      let fleldVal = event.target.value;
      this.setState({ selectedStudent: { ...this.state.selectedStudent, [fieldName]: fleldVal }});
  }
}

export default AddStudentForm;
