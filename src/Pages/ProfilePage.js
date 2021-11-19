import React from 'react';
import { MoonLoader } from 'react-spinners';
import { useData } from '../Context/Contexts';

export const ProfilePage = () => {
  const { currentUserData, loadingState } = useData();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   return !userLoggedIn ? navigate('/') : false;
  // });

  return (
    <>
      {loadingState === true ? (
        <div className="profile fl-col-cen-cen">
          <h2>
            Name: {`${currentUserData?.firstName} ${currentUserData?.lastName}`}
          </h2>
          <h3>Username: {currentUserData?.userName}</h3>
          <h3>E-Mail: {currentUserData?.eMail}</h3>
        </div>
      ) : (
        <MoonLoader color={'#f5f5f5'} size={100} />
      )}
    </>
  );
};
