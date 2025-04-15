// src/components/ProfileSettings/ProfileSettings.jsx
import React, { useState } from "react";
import "./ProfileSettings.css";

const ProfileSettings = ({ onClose }) => {
  const [username, setUsername] = useState("User");
  const [language, setLanguage] = useState("french");
  const [dataUser, setDataUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically save the settings to your state management or backend
    console.log("Settings saved:", {
      username,
      language,
      notifications,
      darkMode,
    });
    if (onClose) onClose();
  };

  return (
    <div className="First-container-profile">
      <div className="profile-settings-container">
        <div className="profile-settings-header">
          <h2>Profile Settings</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        <form className="settings-form" onSubmit={handleSubmit}>
          <div className="profile-avatar-section">
            <div className="profile-avatar-large">
              <span role="img" aria-label="Profile">
                👤
              </span>
            </div>
            <button type="button" className="change-avatar-button">
              Change Avatar
            </button>
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={dataUser.username}
              onChange={(e) => {
                setDataUser({
                  ...dataUser,
                  username: e.target.value,
                });
              }}
              className="form-control"
            />
            <label htmlFor="FirstName">FirstName</label>
            <input
              type="text"
              id="FirstName"
              value={dataUser.firstName}
              onChange={(e) => {
                setDataUser({
                  ...dataUser,
                  firstName: e.target.value,
                });
              }}
              className="form-control"
            />
            <label htmlFor="LastName">LastName</label>
            <input
              type="text"
              id="LastName"
              value={dataUser.lastName}
              onChange={(e) => {
                setDataUser({
                  ...dataUser,
                  lastName: e.target.value,
                });
              }}
              className="form-control"
            />
            <label htmlFor="email">email</label>
            <input
              type="text"
              id="email"
              value={dataUser.email}
              onChange={(e) => {
                setDataUser({
                  ...dataUser,
                  email: e.target.value,
                });
              }}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="language">Language</label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="form-control"
            >
              <option value="french">French</option>
              <option value="english">English</option>
              <option value="arabic">Arabic</option>
            </select>
          </div>

          <div className="w-max h-max my-2">
            <input
              type="submit"
              value="Delete"
              className="flex justify-center items-center
            px-3 py-2 rounded-lg bg-red-500 text-white
            cursor-pointer
            "
            />
          </div>

          <div className="checkbox-group flex items-center">
            <input
              type="checkbox"
              id="notifications"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
            <label htmlFor="notifications">Enable Notifications</label>
          </div>

          <div className="checkbox-group flex items-center">
            <input
              type="checkbox"
              id="darkMode"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
            />
            <label htmlFor="darkMode">Dark Mode</label>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save-button">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
