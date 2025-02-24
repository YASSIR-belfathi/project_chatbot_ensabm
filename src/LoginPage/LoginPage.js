import Icon from "../assets/20945077.jpg";
import Logo from "../assets/FamilyCare.png";
import google from "../assets/google.png";
import facebook from "../assets/communication.png";
import linkedin from "../assets/linkedin.png";
import { Link } from "react-router-dom";

function LoginPage() {
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
            <p className="text-[2rem]">Welcome Back</p>
            <p>to chatBotEnsaBM</p>
          </div>
        </div>
        <div className="containerFormLogin mt-7 flex flex-col w-full items-center h-full justify-between">
          <div className="container_Form w-[50%] flex flex-col h-max items-center text-black">
            <div className="container_email w-full h-max mb-[20px]">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-[14px] border-none outline-none rounded-lg"
              />
            </div>
            <div className="container_password w-full h-max mb-[10px]">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-[14px] border-none outline-none rounded-lg"
              />
            </div>
            <div className="w-full h-max flex flex-row justify-between text-white">
              <p className="w-max cursor-pointer">Forget Password?</p>
              <Link to="/SignUp">
                <p className="w-max cursor-pointer">
                  No Account?
                  <span className="text-orange-500 hover:opacity-75">
                    Create One
                  </span>
                </p>
              </Link>
            </div>
            <div className="container_button_login w-full h-max mt-7">
              <button className="w-full h-max p-2 rounded-lg bg-blue-950 text-white text-[1rem] hover:bg-opacity-50">
                Login
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

export default LoginPage;
