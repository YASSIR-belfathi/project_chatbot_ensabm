import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ProfileForm from './components/ProfileForm';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <ProfileForm />
      </main>
    </div>
  );
}

export default App;
