import "./App.css";
import LoginPage from "./LoginPage/LoginPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatPage from "./ChatPage/ChatPage";

function App() {
  return (
    <div className="App">
      {/* <SignUpPage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<LoginPage />}></Route>
          <Route path="/SignUp" element={<SignUpPage />}></Route>
          <Route path="/ChatPage" element={<ChatPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
