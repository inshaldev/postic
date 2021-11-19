import '../Styles/components.css';
import React from 'react';
import {
  // FaBell,
  FaCog,
  FaHome,
  FaPlusCircle,
  FaUser,
} from 'react-icons/fa';
import { useData } from '../Context/Contexts';
import { Link, useNavigate } from 'react-router-dom';

export const Sidebar = () => {
  const navigate = useNavigate();
  const { currentUser, logoutAccount } = useData();
  const handleSignOut = async () => {
    try {
      await logoutAccount();
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sidebar">
      <div className="user-info">
        <h6>{currentUser?.email}</h6>
        <h3>{currentUser?.username}</h3>
      </div>
      <ul className="sidebar-list">
        <Link to="/home">
          <li className="sidebar-item normal">
            <FaHome className="sidebar-icon" />
            <span className="sidebar-item-text">Home</span>
          </li>
        </Link>
        <Link to="/profile">
          <li className="sidebar-item normal">
            <FaUser className="sidebar-icon" />
            <span className="sidebar-item-text">Profile</span>
          </li>
        </Link>
        {/* <Link to="/notifications">
          <li className="sidebar-item normal">
            <FaBell className="sidebar-icon" />
            <span className="sidebar-item-text">Notifications</span>
          </li>
        </Link> */}
        <Link to="/settings">
          <li className="sidebar-item normal">
            <FaCog className="sidebar-icon" />
            <span className="sidebar-item-text">Settings</span>
          </li>
        </Link>
        <Link to="/new">
          <li className="sidebar-item new-button primary">
            <FaPlusCircle className="sidebar-icon" />
            <span className="sidebar-item-text">New Post</span>
          </li>
        </Link>
      </ul>
      <button className="signout-button" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};
