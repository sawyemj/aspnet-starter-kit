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
import { Modal, Button} from 'react-bootstrap';
import AddStudentForm from '../AddStudentForm'

  class AddStudentModal extends React.Component {

    static propTypes = {
        showModal: PropTypes.boolean,
        handleHide: PropTypes.function
    };

    constructor(props, context) {
        super(props, context);
        
    }
    
    render() {
        return (
            <div className="modal-container">
                <Modal
                    show={this.props.showModal}
                    onHide={this.props.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            Add Student
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddStudentForm isAdding='false' />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default AddStudentModal;

    

          
