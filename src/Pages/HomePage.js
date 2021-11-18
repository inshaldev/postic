import '../Styles/homepage.css';
import React, { useState } from 'react';
import { Sidebar } from '../Components/Sidebar';

export const HomePage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: 'Sun Tzu',
      username: '@theartofwar',
      likes: 0,
      comments: 0,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Vero porro quod ipsam eos saepe mollitia? Adipisci alias unde officiis itaque!',
    },
  ]);

  return (
    <div className="homepage">
      <div className="posts">
        {posts.map((post) => {
          return (
            <div className="post">
              <h1>{post.name}</h1>
              <h3>{post.username}</h3>
              <p>{post.content}</p>
            </div>
          );
        })}
      </div>
      <Sidebar />
    </div>
  );
};
