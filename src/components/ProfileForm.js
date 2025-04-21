import React, { useState } from 'react';
import './ProfileForm.css';

function ProfileForm() {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    bio: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Profile updated:', profile);
  };
  const [image, setImage] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Prevents the browser from opening the file
  };

  return (
    <div className="profile-form-container">
      <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        display: "flex",
        alignItems: "center", 
      }}
    >
      <div
        style={{
          width: "150px",
          height: "150px",
          border: "2px solid gray ",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          marginBottom : "20px"
        }}
      >
        {image ? (
          <img
            src={image}
            alt="Profile"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <p style={{ textAlign: "center", color: "gray" }}>Add Image</p>
        )}
      </div>

      <div style={{ marginLeft: "20px", fontSize: "1.5rem", color: "Black",fontWeight: "bold" }}>
        Abire Boufnichel
      </div>
    </div>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </div>

        

        <div className="form-group">
          <label htmlFor="bio">Describe yourself</label>
          <textarea
            id="bio"
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProfileForm;