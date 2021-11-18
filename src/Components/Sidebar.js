import '../Styles/components.css';
import React from 'react';
import {
  FaBell,
  FaCog,
  FaEnvelope,
  FaHome,
  FaPlusCircle,
  FaUser,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <ul className="sidebar">
      <Link to="/home" className="sidebar-link">
        <li>
          <FaHome className="sidebar-icon" /> Home
        </li>
      </Link>
      <Link to="/home" className="sidebar-link">
        <li>
          <FaBell className="sidebar-icon" />
          Notifications
        </li>
      </Link>
      <Link to="/home" className="sidebar-link">
        <li>
          <FaEnvelope className="sidebar-icon" />
          Messages
        </li>
      </Link>
      <Link to="/home" className="sidebar-link">
        <li>
          <FaUser className="sidebar-icon" />
          Profile
        </li>
      </Link>
      <Link to="/home" className="sidebar-link">
        <li>
          <FaCog className="sidebar-icon" />
          Settings
        </li>
      </Link>
      <Link to="/home" className="sidebar-link">
        <li>
          <FaPlusCircle className="sidebar-icon" />
          New Post
        </li>
      </Link>
    </ul>
  );
};
