// src/components/MessageInput/MessageInput.jsx
import React, { useState } from "react";
import "./MessageInput.css";

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="message-input-container">
      <form className="message-form" onSubmit={handleSubmit}>
        <textarea
          type="text"
          className="message-input"
          placeholder="Write a text..."
          value={message}
          onChange={handleInputChange}
        />

        <div className="input-actions">
          <button type="button" className="action-button">
            <span className="action-icon">🎤</span>
          </button>

          <button type="button" className="action-button">
            <span className="action-icon">📎</span>
          </button>
        </div>

        <button type="submit" className="send-button">
          <span className="send-icon">➤</span>
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
