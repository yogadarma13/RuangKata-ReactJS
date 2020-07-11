import React, { useEffect } from 'react';
import './AddPost.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function AddPost() {

  let namaRef;
  let quoteRef;

  const history = useHistory();
  const dispatch = useDispatch();

  // componentDidMount
  useEffect(() => {
    // Menampilkan alert ketika sudah component sudah di mounting
    alert(`
    Peringatan!!
    Isikan kolom field dengan nama dan kata motivasi anda.
    `);
  }, []);

  // Fungsi yang berfungsi untuk menambahkan postingan baru
  const _handleNewPost = e => {
    // Seleksi kondisi untuk mengecek apakah field yang disediakan ada yang kosong atau tidak
    // Jika kosong akan menampilkan alert
    if (namaRef.value === "" || quoteRef.value === "") {
      alert("Kolom field tidak boleh kosong");
    } else {
      // Membuat object yang berisikan property name dan quote dan mengambil nilainya dari value setiap input
      let newPost = {
        name: namaRef.value,
        quote: quoteRef.value
      };
      // melakukan dispatch ke reducer yang telah disediakan dengan membawa type dan action yang dibutuhkan
      dispatch({
        type: "ADD POST",
        post: newPost
      });
      // Menuju home page kembali
      history.goBack();
    }
    e.preventDefault();
  };

  return (
    <Layout>
      <Navbar />
      <div className="body-container">
        <div className="content-container">
          <h1 className="header">Tambah motivasi</h1>
          <div>
            {/* Form untuk mengisi nama dan kata motifasi dan jika di-submit akan menjalan fungsi _handleNewPost 
          Form ini menggunakan uncontrolled*/}
            <form onSubmit={_handleNewPost}>
              <label>
                Nama <br />
                <input
                  className="name-field"
                  type="text"
                  ref={inputNama => (namaRef = inputNama)}
                />
              </label>
              <br /> <br />
              <label>
                Kata motivasi
                <textarea
                  className="caption-field"
                  ref={inputQuote => (quoteRef = inputQuote)}
                />
              </label>
              <button className="button">Simpan</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
