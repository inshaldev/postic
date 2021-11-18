import React, { useEffect } from 'react';
import { useData } from '../Context/Contexts';
import { useNavigate } from 'react-router';

export const ProfilePage = () => {
  const { userLoggedIn, currentUser } = useData();
  const navigate = useNavigate();
  useEffect(() => {
    return !userLoggedIn ? navigate('/') : false;
  });

  return (
    <div className="profile">
      <h1>{currentUser.name}</h1>
      <h3>{currentUser.username}</h3>
    </div>
  );
};
