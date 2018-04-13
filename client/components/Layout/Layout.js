/**
 * ASP.NET Core Starter Kit (https://dotnetreact.com)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Header from './Header';
import s from './Layout.css';

class Layout extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout" ref={node => { this.root = node; }}>
        <div className="mdl-layout__inner-container">
          <div className={s.ribbon}>
            <Header />
            <div className={s.container}>
            </div>
          </div>
          <main {...this.props} className={s.content} />
        </div>
      </div>
    );
  }
}

export default Layout;
