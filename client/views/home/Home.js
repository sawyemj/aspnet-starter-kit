/**
 * ASP.NET Core Starter Kit (https://dotnetreact.com)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import { Jumbotron, Button } from 'react-bootstrap'


const title = 'ASP.NET Core Starter Kit';
const link = 'https://github.com/kriasoft/aspnet-starter-kit';

class Home extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout>
            <Jumbotron style={{marginTop: '10px', padding:'10px', textAlign: 'center'}}>
                <h1>Welcome To Circles of Connection!</h1>
                <p>
                    A helpful tool that tracks a student's academic progress
  </p>
                <p>
                </p>
            </Jumbotron>
        
      </Layout>
    );
  }
}

export default Home;
