import '../Styles/homepage.css';
import React, { useEffect } from 'react';
import { Posts } from '../Components/Posts';
import { useData } from '../Context/Contexts';
import { MoonLoader } from 'react-spinners';

export const HomePage = () => {
  const { getPosts, currentUserData, loadingState } = useData();
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      {currentUserData !== null && loadingState === false ? (
        <div className="homepage">
          <Posts />
        </div>
      ) : (
        <MoonLoader color={'#f5f5f5'} size={100} />
      )}
    </>
  );
};
