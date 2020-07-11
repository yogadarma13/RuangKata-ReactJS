import React from 'react';
import './EmptyPost.css';
import emptyImage from '../assets/empty_post.svg';

class EmptyPost extends React.Component {
    render() {
        return (
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

        )
    }
}

export default EmptyPost;