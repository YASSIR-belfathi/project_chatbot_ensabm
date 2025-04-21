import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import ChatArea from "../components/ChatArea/ChatArea";
import ChatHeader from "../components/ChatHeader/ChatHeader";
import MessageInput from "../components/MessageInput/MessageInput";
import ProfileSettings from "../components/ProfileSettings/ProfileSettings";
import "./ChatPage.css";
import { useNavigate } from "react-router-dom";

const ChatPage = () => {
  const navigate = useNavigate();
  const token_json = localStorage.getItem("access_token");
  let token = null;
  let token_time = null;
  let token_value = null;
  if (token_json) {
    token = JSON.parse(token_json);
    token_time = token.expiresAt;
    token_value = token.value;
  }
  const [messages, setMessages] = useState([]);
  const [showSettings, setShowSettings] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSendMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      text,
      sender: "user",
      timestamp: new Date().toISOString(),
    };

    setMessages([...messages, newMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "This is a simulated response from the chatbot.",
        sender: "bot",
        timestamp: new Date().toISOString(),
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  if (token_value && token_time > Date.now()) {
    console.log(token_value, token_time);
    return (
      <div className="app">
        <Sidebar
          onSettingsClick={toggleSettings}
          isCollapsed={sidebarCollapsed}
          onToggleCollapse={toggleSidebar}
        />
        <div className="chat-container">
          <ChatHeader chatTitle="Bonjour! Dans le chatbot de l'ENSA-BM" />
          <ChatArea messages={messages} />
          <MessageInput onSendMessage={handleSendMessage} />
        </div>

        {showSettings && (
          <div className="settings-modal">
            <ProfileSettings onClose={toggleSettings} />
          </div>
        )}
      </div>
    );
  } else {
    navigate("/Login");
  }
};

export default ChatPage;
