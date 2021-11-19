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
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserData, setCurrentUserData] = useState(null);
  const [loadingState, setLoadingState] = useState(false);
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unSub;
  }, []);
  useEffect(() => {
    if (currentUser !== null) {
      const fetchUserData = async (id) => {
        const userData = await getDoc(doc(db, 'users', id));
        setCurrentUserData(userData.data());
      };
      fetchUserData(currentUser.uid);
    }
  }, [currentUser]);
  useEffect(() => console.log(currentUserData), [currentUserData]);

  // USER FUNCTIONS:
  const loginAccount = async (email, pass) => {
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      setLoadingState(false);
      return true;
    } catch (error) {
      console.log(error);
      if (error.message.includes('email.current')) {
        setError('There is no account registered with this Email address.');
      } else if (error.message.includes('(auth/missing-email)')) {
        setError('');
      } else {
        setError(error.message);
      }
      setLoadingState(false);
      return false;
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
          const firstLetter = firstName.charAt(0);
          const lastLetter = lastName.charAt(0);
          const logo = (firstLetter + lastLetter).toString();
          await setDoc(doc(db, 'users', userCred.user.uid), {
            firstName: firstName,
            lastName: lastName,
            userName: `@${userName}`,
            eMail: email,
            userLogo: logo,
          }).then(async () => {
            const userData = await getDoc(doc(db, 'users', userCred.user.uid));
            setCurrentUserData(userData.data());
          });
        }
      );
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };
  const logoutAccount = async () => {
    setLoadingState(true);

    setTimeout(() => {
      signOut(auth);
    }, 800);
    setCurrentUserData(null);
    setLoadingState(false);
  };

  // POSTS:
  const [posts, setPosts] = useState([]);
  const addPost = async (content) => {
    await addDoc(postsRef, {
      authorName: `${currentUserData.firstName} ${currentUserData.lastName}`,
      authorUsername: currentUserData.userName,
      authorUID: currentUser.uid,
      authorLogo: currentUserData.userLogo,
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
    currentUserData,
    error,
    setError,
  };
  return <Data.Provider value={contextValue}>{children}</Data.Provider>;
};
