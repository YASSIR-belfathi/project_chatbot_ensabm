// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onSettingsClick, isCollapsed, onToggleCollapse }) => {
  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-container">
          {!isCollapsed && (
            <>
              <div className="logo">
                <span role="img" aria-label="Chatbot Icon">🤖</span>
              </div>
              <h1 className="title">ChatBot ENSA-BM</h1>
            </>
          )}
          {isCollapsed && (
            <div className="logo-collapsed">
              <span role="img" aria-label="Chatbot Icon">🤖</span>
            </div>
          )}
        </div>
        <button className="expand-button" onClick={onToggleCollapse}>
          <span>{isCollapsed ? '⊞' : '⊟'}</span>
        </button>
      </div>
      
      {!isCollapsed && (
        <>
          <div className="sidebar-menu">
            <button className="menu-button">
              <span className="icon">➕</span>
              <span className="label">Add New Chat</span>
            </button>
            
            <button className="menu-button">
              <span className="icon">🕒</span>
              <span className="label">Chat History</span>
            </button>
          </div>
          
          <div className="sidebar-footer">
            <button className="profile-button" onClick={onSettingsClick}>
              <div className="profile-avatar">
                <span role="img" aria-label="Profile">👤</span>
              </div>
              <span className="profile-label">Setting profile</span>
            </button>
          </div>
        </>
      )}
      
      {isCollapsed && (
        <div className="sidebar-menu-collapsed">
          <button className="icon-button" title="Add New Chat">
            <span className="icon">➕</span>
          </button>
          
          <button className="icon-button" title="Chat History">
            <span className="icon">🕒</span>
          </button>
          
          <button className="icon-button" title="Setting Profile" onClick={onSettingsClick}>
            <span className="icon">👤</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
    