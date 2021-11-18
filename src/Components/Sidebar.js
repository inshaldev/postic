import '../Styles/components.css';
import React from 'react';
import {
  // FaBell,
  // FaCog,
  FaEnvelope,
  // FaHome,
  // FaPlusCircle,
  // FaUser,
} from 'react-icons/fa';
import { useData } from '../Context/Contexts';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  const { setDisplayNewPost, currentUser } = useData();

  const setDisplay = () => {
    setDisplayNewPost((value) => !value);
  };

  return (
    <div className="sidebar">
      <div className="user-info">
        <h1>{currentUser.name}</h1>
        <h3>{currentUser.username}</h3>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-item normal">
          <FaEnvelope className="sidebar-icon" />
          Home
        </li>
        <li className="sidebar-item new-button primary" onClick={setDisplay}>
          {/* <FaEnvelope className="sidebar-icon" /> */}
          New Post
        </li>
      </ul>
      <Link to="/login" className="signout-button-link">
        <button className="signout-button">Sign Out</button>
      </Link>
    </div>
  );
};
