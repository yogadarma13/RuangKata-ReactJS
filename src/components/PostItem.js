import React from 'react';
import './PostItem.css';
import deleteIcon from '../assets/trash.png';
import editIcon from '../assets/edit.png';
import { useDispatch } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';

// Extracting component yang digunakan pada Home.js sebagai layout untuk item post
function PostItem(props) {
  const dispatch = useDispatch();

  const history = useHistory();

  // Fungsi yang berfungsi untuk menangani delete post yang telah dibuat
  const _handleDeletePost = e => {
    // melakukan dispatch ke reducer yang telah disediakan dengan membawa type dan action yang dibutuhkan
    dispatch({
      type: "DELETE POST",
      index: props.index
    });
    e.preventDefault();
  };

  // Fungsi yang berfungsi untuk berpindah page dengan menggunakan push yang disediakan oleh useHistory pada react router
  // dan juga membawa state yang akan di proses pada page update
  const _handleEditPost = e => {
    history.push("/update", { index: props.index, post: props.post });
  };

  return (
    <div className="post-item-container">
      <div>
        <div className="user-container">
          <img
            className="user-img"
            src={`https://api.adorable.io/avatars/${props.post.name}`}
            alt="Foto profile"
          />
          {/* Menampilkan nama user dengan menagmbil nilai props */}
          <h3 className="user-name">{props.post.name}</h3>
        </div>
        {/* Menampilkan kata motivasi dengan menagmbil nilai props */}
        <p className="text-post">{props.post.quote}</p>
      </div>
      <div className="button-container">
        <button
          className="post-button"
          style={{ background: "red" }}
          onClick={_handleDeletePost}
        >
          <img
            style={{ width: "16px", height: "16px", marginRight: "8px" }}
            src={deleteIcon}
            alt="Delete"
          />
          Delete
        </button>
        <button
          className="post-button"
          style={{ background: "#3a86ff" }}
          onClick={_handleEditPost}
        >
          <img
            style={{ width: "16px", height: "16px", marginRight: "8px" }}
            src={editIcon}
            alt="Edit"
          />
          Update
        </button>
      </div>
    </div>
  );
}

export default withRouter(PostItem);
