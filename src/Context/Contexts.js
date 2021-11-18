import React, { useState, useContext, createContext } from 'react';

const Data = createContext();
export const useData = () => useContext(Data);

export const Contexts = ({ children }) => {
  const [displayNewPost, setDisplayNewPost] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: '350z',
    name: 'Sun Tzu',
    username: `@theartofwar`,
  });
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
    {
      id: 1,
      name: 'Sun Tzu',
      username: '@theartofwar',
      likes: 0,
      comments: 0,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Vero porro quod ipsam eos saepe mollitia? Adipisci alias unde officiis itaque!',
    },
    {
      id: 1,
      name: 'Sun Tzu',
      username: '@theartofwar',
      likes: 0,
      comments: 0,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Vero porro quod ipsam eos saepe mollitia? Adipisci alias unde officiis itaque!',
    },
    {
      id: 1,
      name: 'Sun Tzu',
      username: '@theartofwar',
      likes: 0,
      comments: 0,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Vero porro quod ipsam eos saepe mollitia? Adipisci alias unde officiis itaque!',
    },
    {
      id: 1,
      name: 'Sun Tzu',
      username: '@theartofwar',
      likes: 0,
      comments: 0,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Vero porro quod ipsam eos saepe mollitia? Adipisci alias unde officiis itaque!',
    },
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

  const contextValue = {
    displayNewPost,
    setDisplayNewPost,
    posts,
    setPosts,
    currentUser,
    setCurrentUser,
  };
  return <Data.Provider value={contextValue}>{children}</Data.Provider>;
};
