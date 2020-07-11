import React from 'react';
import './Home.css';
import emptyImage from '../assets/empty_post.svg';
import PostItem from '../components/PostItem';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';

// Pada Home.js menggunakan function component
export default function Home() {
  const posts = useSelector(state => state.posts);

  return (
    <>
      {/* Kodingan dibawah ini melakukan composing komponen Layout */}
      <Layout>
        <Navbar page="home" />
        <div className="body-container">
          <div className="content-container">
            <h1 className="header">Kumpulan motivasi</h1>
            {posts.length === 0 ? (
              <div className="container-empty-post">
                <div className="empty-content">
                  <img className="img-empty" src={emptyImage} alt="" />
                  <p
                    style={{
                      fontStyle: "italic"
                    }}
                  >
                    Data masih kosong.
                    <br />
                    Silahkan tambahkan kata motivasi anda
                  </p>
                </div>
              </div>
            ) : (
                <ul className="post-list">
                  {posts.map((val, index) => {
                    return (
                      <li className="post-item" key={index}>
                        {/* // Kodingan dibawah ini melakukan composing komponen PostItem
                untuk menampilkan item - item kata motivasi */}
                        <PostItem post={val} index={index} />
                      </li>
                    );
                  })}
                </ul>
              )}
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
}
