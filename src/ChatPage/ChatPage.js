import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import ChatArea from '../Components/ChatArea';
import ChatHeader from '../Components/ChatHeader';
import MessageInput from '../Components/MessageInput';
import ProfileSettings from '../Components/ProfileSettings';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [showSettings, setShowSettings] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSendMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date().toISOString(),
    };

    setMessages([...messages, newMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "This is a simulated response from the chatbot.",
        sender: 'bot',
        timestamp: new Date().toISOString(),
      };
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

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
          <div className="settings-modal-backdrop" onClick={toggleSettings}></div>
          <ProfileSettings onClose={toggleSettings} />
        </div>
      )}
    </div>
  );
};