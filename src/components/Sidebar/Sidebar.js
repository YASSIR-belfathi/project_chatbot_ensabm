// src/components/Sidebar/Sidebar.jsx
import React from "react";
import "./Sidebar.css";
import logo_app from "../../assets/FamilyCare.png";
import add_icon from "../../assets/add.png";
import menu from "../../assets/menus.png";

const Sidebar = ({ onSettingsClick, isCollapsed, onToggleCollapse }) => {
  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <div className="logo-container">
          {!isCollapsed && (
            <>
              <div className="logo">
                <span role="img" aria-label="Chatbot Icon">
                  <img
                    src={logo_app}
                    alt="en-cours"
                    className="w-7 h-7 rounded-lg"
                  />
                </span>
              </div>
              <h1 className="title">ChatBot ENSA-BM</h1>
            </>
          )}
          {isCollapsed && (
            <div className="logo-collapsed">
              <span role="img" aria-label="Chatbot Icon">
                <img
                  src={logo_app}
                  alt="en-cours"
                  className="w-7 h-7 rounded-lg"
                />
              </span>
            </div>
          )}
        </div>
        <button className="expand-button" onClick={onToggleCollapse}>
          <span>
            <img src={menu} alt="en-cours" className="w-5 h-5 rounded-lg" />
          </span>
        </button>
      </div>

      {!isCollapsed && (
        <>
          <div className="sidebar-menu">
            <button className="menu-button">
              <span className="icon">
                <img
                  src={add_icon}
                  alt="en-cours"
                  className="w-5 h-5 rounded-lg"
                />
              </span>
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
                <span role="img" aria-label="Profile">
                  👤
                </span>
              </div>
              <span className="profile-label">Setting profile</span>
            </button>
          </div>
        </>
      )}

      {isCollapsed && (
        <>
          <div className="sidebar-menu-collapsed">
            <button className="menu-button">
              <span className="icon">
                <img
                  src={add_icon}
                  alt="en-cours"
                  className="w-5 h-5 rounded-lg"
                />
              </span>
            </button>

            <button className="menu-button">
              <span className="icon">🕒</span>
            </button>
          </div>

          <div className="sidebar-footer-collapsed">
            <button className="menu-button-collapsed" onClick={onSettingsClick}>
              <span role="img" aria-label="Profile">
                👤
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
