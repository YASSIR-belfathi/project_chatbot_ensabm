import "./App.css";
import LoginPage from "./LoginPage/LoginPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import ChatPage from "./ChatPage/ChatPage";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route
            path="/ChatPage"
            element={
              <ProtectedRoute>
                <ChatPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/Login" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
