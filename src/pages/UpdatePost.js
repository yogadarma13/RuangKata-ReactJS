import React, { useState, useEffect } from 'react';
import './AddPost.css';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Fungsi yang berfungsi sebagai custom hooks
function usePostHooks(init) {
  
  // memberikan nilai pada state
  const [state, setState] = useState(init);

  // componentDidMount Lifecycle
  useEffect(() => {
    // Menampilkan alert ketika sudah component sudah di mounting
    alert(`
    Peringatan!!
    Isikan kolom field dengan nama dan kata motivasi anda.
    `);
  }, []);

  // componentDidUpdate Lifecycle
  useEffect(() => { }, [state]);

  return [state, setState];
}

function UpdatePost() {

  // useLocation() berfungsi untuk mengambil data state yang dikirim dari page sebelumnya
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  // Membuat state dengan custom hooks yang telah dibuat
  const [state, setState] = usePostHooks({
    index: location.state.index,
    post: location.state.post
  });

  // Fungsi untuk menangani update pada post yang telah dibuat
  const _handleUpdatePost = e => {
    // Seleksi kondisi untuk mengecek apakah field yang disediakan ada yang kosong atau tidak
    // Jika kosong akan menampilkan alert
    if (state.post.name === "" || state.post.quote === "") {
      alert("Kolom field tidak boleh kosong");
    } else {
      // melakukan dispatch ke reducer yang telah disediakan dengan membawa type dan action yang dibutuhkan
      dispatch({
        type: "UPDATE POST",
        index: state.index,
        post: state.post
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
          <h1 className="header">Edit motivasi</h1>
          {/* Form untuk mengisi nama dan kata motifasi dan jika di-submit akan menjalan fungsi _handleUpdatePost 
          Form ini menggunakan controlled*/}
          <form onSubmit={_handleUpdatePost}>
            <label>
              Nama <br />
              <input
                className="name-field"
                type="text"
                value={state.post.name}
                onChange={e => {
                  // melakukan perubahan pada state setiap terjadi perubahan dan akan menjalan lifecycle componentDidUpdate
                  setState({
                    index: state.index,
                    post: {
                      name: e.target.value,
                      quote: state.post.quote
                    }
                  });
                }}
              />
            </label>
            <br /> <br />
            <label>
              Kata motivasi
              <textarea
                className="caption-field"
                value={state.post.quote}
                onChange={e => {
                  // melakukan perubahan pada state setiap terjadi perubahan dan akan menjalan lifecycle componentDidUpdate
                  setState({
                    index: state.index,
                    post: {
                      name: state.post.name,
                      quote: e.target.value
                    }
                  });
                }}
              />
            </label>
            <button className="button">Perbarui</button>
          </form>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

export default UpdatePost;
