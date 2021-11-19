import '../Styles/newpost.css';
import React, { useEffect, useRef } from 'react';
import { useData } from '../Context/Contexts';
import { useNavigate } from 'react-router';

export const NewPostPage = () => {
  const postContent = useRef();
  const { currentUser, addPost } = useData();
  const navigate = useNavigate();
  useEffect(() => {
    return currentUser === null ? navigate('/') : '';
  });

  return (
    <div className="new-post">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addPost(postContent.current.value);
          navigate('/home');
        }}
        className="new-post-form"
      >
        <textarea
          className="new-post-input"
          placeholder="Type your post here..."
          ref={postContent}
          required
        ></textarea>
        <button className="primary">Post</button>
      </form>
    </div>
  );
};
