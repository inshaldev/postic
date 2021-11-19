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
  getDoc,
  setDoc,
  deleteDoc,
  doc,
  Timestamp,
  orderBy,
  query,
} from 'firebase/firestore';

const Data = createContext();

export const useData = () => useContext(Data);

export const Contexts = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserData, setCurrentUserData] = useState(null);
  const [loadingState, setLoadingState] = useState(false);
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unSub;
  }, []);

  // USER FUNCTIONS:
  const loginAccount = async (email, pass) => {
    try {
      await signInWithEmailAndPassword(auth, email, pass).then(
        async (userCred) => {
          const userData = await getDoc(doc(db, 'users', userCred.user.uid));
          setCurrentUserData(userData.data());
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  const registerAccount = async (
    email,
    pass,
    firstName,
    lastName,
    userName
  ) => {
    try {
      await createUserWithEmailAndPassword(auth, email, pass).then(
        async (userCred) => {
          await setDoc(doc(db, 'users', userCred.user.uid), {
            firstName: firstName,
            lastName: lastName,
            userName: `@${userName}`,
          }).then(async () => {
            const userData = await getDoc(doc(db, 'users', userCred.user.uid));
            setCurrentUserData(userData.data());
          });
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  const logoutAccount = async () => {
    signOut(auth);
  };

  // POSTS:
  const [posts, setPosts] = useState([]);
  const addPost = async (content) => {
    await addDoc(postsRef, {
      authorName: `${currentUserData.firstName} ${currentUserData.lastName}`,
      authorUsername: currentUserData.userName,
      authorUID: currentUser.uid,
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
    await getDocs(query(postsRef, orderBy('createdAt', 'desc'))).then(
      (snapshot) => {
        snapshot.docs.forEach((doc) => {
          postsFetched.push({
            ...doc.data(),
            id: doc.id,
          });
        });
      }
    );
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
    loginAccount,
    logoutAccount,
    registerAccount,
    loadingState,
    setLoadingState,
  };
  return <Data.Provider value={contextValue}>{children}</Data.Provider>;
};
