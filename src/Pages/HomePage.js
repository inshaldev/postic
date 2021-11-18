import '../Styles/homepage.css';
import React from 'react';
import { Sidebar } from '../Components/Sidebar';
import { Posts } from '../Components/Posts';

export const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <Posts />
      </div>
      <Sidebar />
    </>
  );
};
