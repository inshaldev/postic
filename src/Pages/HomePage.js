import '../Styles/homepage.css';
import React, { useEffect } from 'react';
import { Posts } from '../Components/Posts';
import { useData } from '../Context/Contexts';
import { useNavigate } from 'react-router';

export const HomePage = () => {
  const { userLoggedIn } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    return !userLoggedIn ? navigate('/') : false;
  });

  return (
    <>
      <div className="homepage">
        <Posts />
      </div>
    </>
  );
};
