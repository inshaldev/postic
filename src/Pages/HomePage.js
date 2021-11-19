import '../Styles/homepage.css';
import React, { useEffect } from 'react';
import { Posts } from '../Components/Posts';
import { useData } from '../Context/Contexts';
import { PulseLoader } from 'react-spinners';

export const HomePage = () => {
  const { getPosts, currentUserData } = useData();
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      {currentUserData !== null ? (
        <div className="homepage">
          <Posts />
        </div>
      ) : (
        <PulseLoader />
      )}
    </>
  );
};
