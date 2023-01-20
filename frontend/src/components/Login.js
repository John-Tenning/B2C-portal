import React, { useState } from "react";
import { Link } from "react-router-dom";
import home from "../assets/homepage.jpg";
import logo from "../assets/logo.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selected, setSelected] = useState(0);
  const [visibility, setVisibility] = useState(false);

  //   0 - Faculty
  //   1 - Student

  return (
    <div className="flex w-screen overflow-hidden h-screen font-lato ">
      <div className="w-[40%] flex-1 bg-white justify-center items-center">
        <div className="h-16 px-2 mt-2">
          <img src={logo} alt="" className="h-full w-auto" />
        </div>
        <div className="flex flex-col h-[calc(100vh-9rem)] justify-center items-center ">
          <div className="text-4xl font-bold mb-4">Login</div>
          <div className="flex items-center bg-grey p-1 shadow-lg rounded-lg space-x-2 mb-6">
            <button
              className={`text-xl py-1 px-4 transition-all font-thin ${
                selected === 1 && "bg-dark rounded-lg text-white"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setSelected(1);
              }}
            >
              Corporate
            </button>
            <button
              className={`text-xl py-1 px-4 font-thin ${
                selected === 0 && "bg-dark rounded-lg text-white"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setSelected(0);
              }}
            >
              Customer
            </button>
          </div>
          <div className="flex flex-col justify-start items-start w-1/2">
            <div className={`w-full flex flex-col items-start justify-center`}>
              <p className="text-fog font-lato w-full mt-4">Email Address</p>
              <input
                type="text"
                className="appearance-none outline-none border-b p-1 w-full border-b-fog"
              />
              <div className="flex w-full">
                <p className="text-fog font-lato w-full mt-4">Password</p>
                <div className="flex-1"></div>

                <button
                  onClick={(e) => {
                    setVisibility(!visibility);
                  }}
                >
                  {visibility ? (
                    <FaEye className="mt-4" />
                  ) : (
                    <FaEyeSlash className="mt-4" />
                  )}
                </button>
              </div>
              <input
                type={visibility ? "text" : "password"}
                className="appearance-none outline-none border-b p-1 w-full border-b-fog"
              />
            </div>
          </div>
          <div className="flex items-center justify-center text-bold bg-yellow text-black py-1.5 px-6 mt-16 rounded-lg hover:bg-black hover:text-white">
            <button className=" text-lg">Login</button>
          </div>
          
          <div className="flex items-center justify-center mt-4">
            <p className="text-xs">
              <Link to="/signup">
                Not have an Account ? {"  "}
                <span className="text-dark underline">Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-[60%] flex-1.5 bg-smoke rounded-[36px] m-3"
        style={{
          backgroundImage: `url(${home})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default Login;
{
  /* <Link to="/signup">here</Link> */
}
