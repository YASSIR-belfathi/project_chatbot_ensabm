import "./App.css";
import LoginPage from "./LoginPage/LoginPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import ChatPage from "./ChatPage/ChatPage";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [authorization, setAuthorization] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/Login"
            element={<LoginPage authorization={setAuthorization} />}
          />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route
            path="/ChatPage"
            element={
              <ProtectedRoute isAuthorized={authorization}>
                <ChatPage />
              </ProtectedRoute>
            }
          />
          {/* Par défaut, on peut rediriger vers login */}
          <Route path="*" element={<Navigate to="/Login" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
