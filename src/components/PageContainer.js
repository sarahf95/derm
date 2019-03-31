import React, { Component } from 'react';
import Nav from './Nav';
import Report from './Report';

class PageContainer extends Component {
  render() {
    return (
      <div className="PageContainer">
        <Nav />
        <Report />
      </div>
    );
  }
}

export default PageContainer;
