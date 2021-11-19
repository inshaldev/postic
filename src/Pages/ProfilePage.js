import React from 'react';
import { useData } from '../Context/Contexts';

export const ProfilePage = () => {
  const { currentUser } = useData();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   return !userLoggedIn ? navigate('/') : false;
  // });

  return (
    <div className="profile">
      <h1>{currentUser?.name}</h1>
      <h3>{currentUser?.username}</h3>
    </div>
  );
};
