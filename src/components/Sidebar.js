import React from 'react';
import { Settings, UserCircle, LogOut } from 'lucide-react';
import './Sidebar.css';
import logo from '../assets/chatbotlog.png';

const Sidebar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="Chatbot Logo" className="sidebar-logo" />
        <h2>ChatBot ENSA-BM</h2>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li className="nav-item">
            <span className="nav-icon">+</span>
            <span>Add New Chat</span>
          </li>
          <li className="nav-item">
            <span className="nav-icon">↻</span>
            <span>Chat History</span>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button 
          onClick={toggleMenu} 
          className="profile-button"
        >
          <div className="avatar">AB</div>
          <span>Setting Profile</span>
        </button>
        
        {showMenu && (
          <div className="profile-menu">
            <button className="menu-item">
              <Settings size={16} />
              <span>Settings</span>
            </button>
            <button className="menu-item">
              <UserCircle size={16} />
              <span>Profile</span>
            </button>
            <button className="menu-item">
              <LogOut size={16} />
              <span>Log Out</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;