import "./App.css";
import LoginPage from "./LoginPage/LoginPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <SignUpPage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<LoginPage />}></Route>
          <Route path="/SignUp" element={<SignUpPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
