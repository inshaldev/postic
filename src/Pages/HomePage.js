import '../Styles/homepage.css';
import React, { useEffect } from 'react';
import { Posts } from '../Components/Posts';
import { useData } from '../Context/Contexts';

export const HomePage = () => {
  const { getPosts } = useData();
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      <div className="homepage">
        <Posts />
      </div>
    </>
  );
};
