import React from 'react';
import './Navbar.css';
import { Link, withRouter } from 'react-router-dom';

// Extracting component Navbar yang digunakan pada setiap page
class Navbar extends React.Component {
  render() {
    return (
        <div className="navbar">
          <div className="navbar-container">
            {/* Melakukan seleksi berdasarkan props yang dikirim untuk mengetahui 
          page yang ditampilkan sehingga tampilan navbar bisa dibuat berbeda */}
            {this.props.page === "home" ? (
              <>
                <h1 className="navbar-title">Ruang Kata</h1>
                <Link className="link" to="/add">
                  + Tambah motivasi
                </Link>
              </>
            ) : (
                <>
                  <Link className="link-title" to="/">
                    <h1 className="navbar-title">Ruang Kata</h1>
                  </Link>
                </>
              )}
          </div>
        </div>
    );
  }
}

export default withRouter(Navbar);
