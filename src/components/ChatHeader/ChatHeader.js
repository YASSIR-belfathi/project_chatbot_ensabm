// src/components/ChatHeader/ChatHeader.jsx
import React from 'react';
import './ChatHeader.css';

const ChatHeader = ({ chatTitle }) => {
  return (
    <div className="chat-header">
      <h2 className="chat-title">{chatTitle || "Bonjour! Dans le chatbot de l'ENSA-BM"}</h2>
      <div className="header-actions">
        <button className="header-action-button">
          <span className="header-action-icon">⋮</span>
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;