import React, { useEffect } from 'react';
import { useData } from '../Context/Contexts';
import { useNavigate } from 'react-router';

export const SettingsPage = () => {
  const { userLoggedIn } = useData();
  const navigate = useNavigate();
  useEffect(() => {
    return !userLoggedIn ? navigate('/') : false;
  });
  return (
    <div className="settings-page">
      <h1>Settings!</h1>
    </div>
  );
};
