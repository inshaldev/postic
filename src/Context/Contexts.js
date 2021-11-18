import React, { useState, useEffect, useContext, createContext } from 'react';
import { auth, postsRef, db } from '../Firebase/config';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getDocs,
  addDoc,
  setDoc,
  deleteDoc,
  doc,
  Timestamp,
} from 'firebase/firestore';

const Data = createContext();
export const useData = () => useContext(Data);

export const Contexts = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: '350z',
    name: 'Sun Tzu',
    username: `@theartofwar`,
  });

  // USER FUNCTIONS:
  const loginAccount = async (email, pass) => {
    try {
      await signInWithEmailAndPassword(auth, email, pass);
    } catch (err) {
      console.log(err);
    }
  };
  const registerAccount = async (email, pass) => {
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
    } catch (err) {
      console.log(err);
    }
  };

  // POSTS:
  const [posts, setPosts] = useState([]);
  const addPost = async (content) => {
    await addDoc(postsRef, {
      authorName: currentUser.name,
      authorUsername: currentUser.username,
      content: content,
      likes: 0,
      comments: 0,
      createdAt: Timestamp.now(),
    });
    getPosts();
  };
  const deletePost = async (id) => {
    await deleteDoc(doc(db, 'posts', id));
    getPosts();
  };
  const getPosts = async () => {
    const postsFetched = [];
    await getDocs(postsRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        postsFetched.push({
          ...doc.data(),
          id: doc.id,
        });
      });
    });
    setPosts(postsFetched);
  };
  // POSTS END

  const contextValue = {
    addPost,
    getPosts,
    deletePost,
    posts,
    setPosts,
    currentUser,
    setCurrentUser,
    userLoggedIn,
    setUserLoggedIn,
  };
  return <Data.Provider value={contextValue}>{children}</Data.Provider>;
};
