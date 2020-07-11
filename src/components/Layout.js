import React from 'react';
import './Layout.css';

// Extracting component Layout yang digunakan pada setiap page
class Layout extends React.Component {
  render() {
    return <div className="layout-container">{this.props.children}</div>;
  }
}

export default Layout;
