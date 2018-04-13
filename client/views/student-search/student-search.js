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
import { Table, PageHeader, Panel } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead';

class About extends React.Component {

  componentDidMount() {
    document.title = 'FInd a Student';
  }

  render() {
    return (
        <Layout>
            <PageHeader style={{ color: '#7a1222' }}>
                Student Search
            </PageHeader>
            <Typeahead
                onChange={(selected) => {
                    // Handle selections...
                }}
                options={[ /* Array of objects or strings */]}
                placeholder="Find Student"
                style={{marginTop:'10px'}}
            />
            <Panel style={{ marginTop: '10px' }}>
                <Panel.Heading style={{ backgroundColor: '#f0b92b', color: '#7a1222'}}>Students</Panel.Heading>
                <Panel.Body>
                    <Table responsive style={{ marginTop: '10px' }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                    </tbody>
                </Table></Panel.Body>
            </Panel>
      </Layout>
    );
  }

}

export default About;
