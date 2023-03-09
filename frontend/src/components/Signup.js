import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import home from "../assets/homepage.jpg";
import logo from "../assets/logo.jpg";
import ContactUs from "./ContactUs";
import TextInput from "./Input";
import { toast } from "react-hot-toast";
import axios from "axios";
import { fetchSignup } from "../API/calls";


const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [confpwd, setconfpwd] = useState("");
  const [selected, setSelected] = useState(0);
  //   0 - Corporate
  //   1 - Customer
  const handleClick = () => {
    if (password != confpwd) {
      toast.error("Passwords do not match");
      return;
    }
    if (password.includes(" ")) {
      toast.error("Password cannot contain spaces");
      return;
    }
    if (username.includes(" ")) {
      toast.error("Username cannot contain spaces");
      return;
    }
    if (password.length < 8) {
      toast.error("Password must be atleast 8 characters long");
      return;
    }
    if (password.length > 20) {
      toast.error("Password cannot be more than 20 characters long");
      return;
    }
    // password must contain 1 special character
    if (!password.match(/[^a-zA-Z0-9]/)) {
      toast.error("Password must contain atleast 1 special character");
      return;
    }
    // password must contain 1 number
    if (!password.match(/[0-9]/)) {
      toast.error("Password must contain atleast 1 number");
      return;
    }
    console.log(
      {username : username, password : password, role : selected ? "customer" : "corporate"}
    )
    if (selected) {
      toast.promise(
        fetchSignup({
          username: username,
          password: password,
          role: "customer",
        }),
        {
          loading: "Registering...",
          success: (res) => {
            return "Registered Successfully";
          },
          error: (err) => {
            return `Error: ${err.response.data.error}`;
          },
        }
      );
    }else{
      toast.promise(
        fetchSignup({
          username: username,
          password: password,
          role: "corporate",
        }) , 
        {
          loading: "Registering...",
          success: (res) => {
            return "Registered Successfully";
          },
          error: (err) => {
            return `Error: ${err.response.data.error}`;
          },
        }
      )
    }
    navigate("/login");
  };

  return (
    <div className="">
      <div className="flex w-screen overflow-hidden h-screen font-lato ">
        <div className="w-[40%] flex-1 bg-white justify-center items-center">
          <button className="h-16 px-2 mt-2">
            <Link to="/">
              <img className="h-full w-auto" src={logo} alt="" />
            </Link>
          </button>
          <div className="flex flex-col h-[calc(100vh-9rem)] justify-center items-center ">
            <div className="text-4xl font-bold mb-4">Signup</div>
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
              <div
                className={`w-full flex flex-col items-start justify-center`}
              >
                <TextInput
                  className="mt-8"
                  valueState={[username, setUsername]}
                  placeholder="Enter Username"
                  title="Username"
                />
                <TextInput
                  className="mt-8"
                  valueState={[password, setpassword]}
                  placeholder="Enter Password"
                  title="Password"
                  type="password"
                />
                <TextInput
                  className="mt-8"
                  valueState={[confpwd, setconfpwd]}
                  placeholder="Confirm Password"
                  title="Re-Enter password"
                  type="password"
                />
              </div>
            </div>
            <div className="flex items-center justify-center text-bold bg-yellow-400 text-black py-1.5 px-6 mt-16 rounded-lg hover:bg-black hover:text-white">
              <button className="text-lg" onClick={handleClick}>
                Signup
              </button>
            </div>
            <div className="flex items-center justify-center mt-4">
              <p className="text-xs">
                <Link to="/login">
                  Already Registerd ? {"  "}
                  <span className="text-dark underline">Log In</span>
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
      <ContactUs />
    </div>
  );
};

export default Signup;
