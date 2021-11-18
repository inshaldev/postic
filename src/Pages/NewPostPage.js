import '../Styles/newpost.css';
import React, { useEffect } from 'react';
import { useData } from '../Context/Contexts';
import { useNavigate } from 'react-router';

export const NewPostPage = () => {
  const { userLoggedIn } = useData();
  const navigate = useNavigate();
  useEffect(() => {
    return !userLoggedIn ? navigate('/') : false;
  });
  const addPost = (e) => {
    e.preventDefault();
  };
  return (
    <div className="new-post">
      <form onSubmit={addPost} className="new-post-form">
        <textarea
          className="new-post-input"
          placeholder="Type your post here..."
        ></textarea>
        <button className="primary">Post</button>
      </form>
    </div>
  );
};
