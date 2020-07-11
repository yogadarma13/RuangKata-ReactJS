import React from 'react';
import './Footer.css';

// Extracting component Footer yang digunakan pada setiap page
class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>© Copyright by Ruang Kata</p>
      </div>
    );
  }
}

export default Footer;
