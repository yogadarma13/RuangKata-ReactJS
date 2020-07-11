import React from 'react';
import './Home.css';
import { useSelector } from 'react-redux';

import PostItem from '../components/PostItem';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EmptyPost from '../components/EmptyPost'

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
            {/* Melakukan seleksi jika post masih kosong maka akan menampilkan component EmptyPost.js */}
            {posts.length === 0 ? <EmptyPost /> : (
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
