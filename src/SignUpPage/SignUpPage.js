import Logo from "../assets/FamilyCare.png";
import google from "../assets/google.png";
import facebook from "../assets/communication.png";
import linkedin from "../assets/linkedin.png";
import Icon from "../assets/20945077.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();

  const [Form, setForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    email: "",
  });

  function sendData() {
    let send_value = true;

    for (let element in Form) {
      if (element.trim() === "") {
        send_value = false;
      }
    }

    if (send_value) {
      axios
        .post("http://localhost:8086/login/createUser", Form, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            navigate("/Login");
          }
        })
        .catch((e) => console.log(e));
    }

    console.log(Form);
  }

  return (
    <div className="bg-[#2257F7] w-full h-full flex flex-row text-white">
      <div className="container_form_login w-[60%] p-4 flex flex-col">
        <div className="container_header w-full h-max flex flex-row justify-between items-center relative">
          <div className="container_icon_page w-max h-max absolute left-0">
            <img
              src={Logo}
              alt="en-cours"
              className="w-[40px] h-[40px] rounded-lg"
            ></img>
          </div>
          <div className="container_title w-full h-max flex flex-col items-center">
            <p className="text-[2rem]">Welcome to ChatBot EnsaBm</p>
            <p>Create New Account</p>
          </div>
        </div>
        <div className="containerFormLogin mt-7 flex flex-col w-full items-center h-full justify-between">
          <div className="container_Form w-[50%] flex flex-col h-max items-center text-black">
            <div className="container_firsName w-full h-max mb-[10px]">
              <input
                type="text"
                placeholder="FistName"
                className="w-full p-[14px] border-none outline-none rounded-lg"
                onChange={(e) => {
                  setForm({ ...Form, firstName: e.target.value });
                }}
              />
            </div>
            <div className="container_lastName w-full h-max mb-[10px]">
              <input
                type="text"
                placeholder="LastName"
                className="w-full p-[14px] border-none outline-none rounded-lg"
                onChange={(e) => {
                  setForm({ ...Form, lastName: e.target.value });
                }}
              />
            </div>
            <div className="container_email w-full h-max mb-[10px]">
              <input
                type="text"
                placeholder="User Name"
                className="w-full p-[14px] border-none outline-none rounded-lg"
                onChange={(e) => {
                  setForm({ ...Form, userName: e.target.value });
                }}
              />
            </div>
            <div className="container_password w-full h-max mb-[10px]">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-[14px] border-none outline-none rounded-lg"
                onChange={(e) => {
                  setForm({ ...Form, email: e.target.value });
                }}
              />
            </div>
            <div className="container_password w-full h-max mb-[10px]">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-[14px] border-none outline-none rounded-lg"
                onChange={(e) => {
                  setForm({ ...Form, password: e.target.value });
                }}
              />
            </div>
            <div className="container_password w-full h-max mb-[10px]">
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-[14px] border-none outline-none rounded-lg"
              />
            </div>
            <div className="w-full h-max flex flex-row justify-center text-white">
              <p className="w-max cursor-pointer">
                Connected Before?
                <Link to="/Login">
                  <span className="text-orange-500 hover:opacity-75">
                    Sign In
                  </span>
                </Link>
              </p>
            </div>
            <div className="container_button_login w-full h-full my-4 flex items-center">
              <button
                className="w-full h-max p-2 rounded-lg bg-blue-950 text-white text-[1rem] hover:bg-opacity-50"
                onClick={() => sendData()}
              >
                Sign up
              </button>
            </div>
          </div>
          <div className="container_SSO_icon w-[50%] flex items-center flex-col">
            <div className="w-full flex flex-row h-max items-center">
              <hr className="w-full border-[1px]" />
              <p className="w-full flex justify-center">Or SignIn with</p>
              <hr className="w-full border-[1px]" />
            </div>
            <div className="container_icons w-max h-max mt-[10px] flex flex-row gap-2">
              <div className="container_icon h-max w-max p-[4px] rounded-lg bg-white cursor-pointer">
                <img
                  src={google}
                  alt="en-cours"
                  className="w-[30px] h-[30px]"
                ></img>
              </div>
              <div className="container_icon h-max w-max p-[4px] rounded-lg bg-white cursor-pointer">
                <img
                  src={facebook}
                  alt="en-cours"
                  className="w-[30px] h-[30px]"
                ></img>
              </div>
              <div className="container_icon h-max w-max p-[4px] rounded-lg bg-white cursor-pointer">
                <img
                  src={linkedin}
                  alt="en-cours"
                  className="w-[30px] h-[30px]"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container_image w-[40%] rounded-lg h-full p-4">
        <img
          src={Icon}
          alt="en-cours"
          className="rounded-xl w-full h-full"
        ></img>
      </div>
    </div>
  );
}

export default SignUp;
