import React, { useEffect, useState } from "react";
import "./ProfileSettings.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfileSettings = ({ onClose }) => {
  const navigate = useNavigate();
  const token_json = localStorage.getItem("access_token");
  let token = null;
  if (token_json) {
    token = JSON.parse(token_json);
    token = token.value;
  }
  const [userId, setUserid] = useState("");
  const [file, setFile] = useState(null);
  // const [language, setLanguage] = useState("french");
  const [dataUser, setDataUser] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [UserData, setUserData] = useState({
    firstName: "",
    lastName: "",
    photo_label: "",
    language_user: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically save the settings to your state management or backend
    // console.log("Settings saved:", {
    //   username,
    //   language,
    //   notifications,
    //   darkMode,
    // });
    if (onClose) onClose();
  };

  async function handleUploadFile() {
    if (!file) return;
    const formData = new FormData();

    formData.append("file", file);

    setUserData({ ...UserData, photo_label: file.name });
    await axios
      .post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error);
      });
  }

  async function deleteUser() {
    if (token) {
      await axios
        .delete(`http://localhost:8086/user/delete/${dataUser.userName}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("the user is deleted");
        })
        .catch((error) => {
          console.log(error);
        });

      await axios
        .delete(`http://localhost:8086/login/delete/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          navigate("/Login");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  async function refreshToken() {
    const refreshToken_json = localStorage.getItem("refresh_token");
    let refresh_token = null;
    if (refreshToken_json) {
      refresh_token = refreshToken_json.value;
    }
    const data_token = {
      client_id: "api-test",
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    };

    await axios
      .post(
        "http://localhost:8080/realms/Project_PFA/protocol/openid-connect/token",
        data_token,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        const tokenInfo = {
          value: response.data.access_token,
          expiresAt: Date.now() + 60 * 1000,
        };
        const tokenRefresh = {
          value: response.data.refresh_token,
          expiresAt: Date.now() + 60 * 1000 * 30,
        };
        localStorage.setItem("access_token", JSON.stringify(tokenInfo));
        localStorage.setItem("refresh_token", JSON.stringify(tokenRefresh));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function updateUserInfo() {
    console.log(dataUser);
    if (token) {
      await axios
        .put(`http://localhost:8086/login/update/${userId}`, dataUser, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          refreshToken();
          console.log(dataUser);
        })
        .catch((error) => {
          console.log(error);
        });
      await axios
        .put(
          `http://localhost:8086/user/update/${dataUser.userName}`,
          UserData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log("updated user data");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:8086/login/userInfo", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setDataUser({
            ...dataUser,
            email: response.data.email,
            userName: response.data.preferred_username,
            lastName: response.data.family_name,
            firstName: response.data.given_name,
          });
          setUserid(response.data.sub);
          axios
            .get(
              `http://localhost:8086/user/search/${response.data.preferred_username}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            .then((response) => {
              setUserData({
                ...UserData,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                email: response.data.email,
                language_user: response.data.language_user,
                photo_label: response.data.photo_label,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => console.log(error));
    }
  }, []);

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
                <img
                  src={`http://localhost:5000/uploads/${UserData.photo_label}`}
                  alt="en-cours"
                />
              </span>
            </div>
            <div className="w-full flex items-center flex-col">
              <input
                type="file"
                id="hiddenFileInput"
                style={{ display: "none" }}
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
              <label
                htmlFor="hiddenFileInput"
                className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-800"
              >
                {!file ? "choice photo" : file.name}
              </label>
              <input
                type="button"
                value="Upload"
                className="border-blue-600 border-[1px] px-4 py-2 rounded cursor-pointer hover:bg-blue-800 hover:text-white mt-1"
                onClick={handleUploadFile}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={dataUser.userName}
              className="form-control"
              readOnly
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

            <label htmlFor="Password">Password</label>
            <input
              type="text"
              id="Password"
              value={dataUser.password}
              onChange={(e) => {
                setDataUser({
                  ...dataUser,
                  password: e.target.value,
                });
              }}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="language">Language</label>
            <select
              id="language"
              value={UserData.language_user}
              onChange={(e) =>
                setUserData({
                  ...UserData,
                  language_user: e.target.value,
                })
              }
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
              onClick={deleteUser}
            />
          </div>
          <div className="w-max h-max my-2">
            <input
              type="submit"
              value="Se Déconnecter"
              className="flex justify-center items-center
            px-3 py-2 rounded-lg bg-green-600 text-white
            cursor-pointer
            "
              onClick={() => {
                localStorage.removeItem("access_token");
                navigate("/Login");
              }}
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
            <button
              type="submit"
              className="save-button"
              onClick={updateUserInfo}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
