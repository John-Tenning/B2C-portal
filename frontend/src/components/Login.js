import React, { useState } from "react";
import { Link } from "react-router-dom";
import home from "../assets/homepage.jpg";
import logo from "../assets/logo.jpg";
import { toast } from "react-hot-toast";
import ContactUs from "./ContactUs";
import TextInput from "./Input";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "../API/calls";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [selected, setSelected] = useState(0);
  const handleClick = () => {
    const postbody = { username: username, password: password };
    fetchLogin(postbody)
      .then((res) => {
        // console.log(res.data);
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", res.data.username);
          console.log(res.data.token);
          console.log(res.data.username);
          toast.success("Login Successful");
          navigate("/home");
        } else {
          toast.error("Login Failed");
        }
      })
      .catch((err) => {
        toast.error("Login Failed");
      });
  };

  //   0 - Faculty
  //   1 - Student

  return (
    <div className="flex-col">
      <div className="lg:flex-row flex flex-col w-screen lg:overflow-hidden lg:h-screen font-lato font-bold">
        <div className="lg:w-[40%] flex-1 lg:bg-white justify-center items-center bg-smoke ">
          <button className="h-16 px-2 mt-2">
            <Link to="/">
              <img className="h-full w-auto" src={logo} alt="" />
            </Link>
          </button>
          <div className="flex flex-col h-[calc(100vh-9rem)] justify-center items-center ">
            <div className="text-4xl font-bold mb-4">Login</div>
            <div className="flex items-center bg-grey p-1 shadow-lg rounded-lg space-x-2 mb-6">
              <button
                className={`text-xl py-1 px-4 transition-all  ${
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
                className={`text-xl py-1 px-4   ${
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
              </div>
            </div>
            <div className="flex items-center justify-center text-bold bg-yellow-400 text-black py-1.5 px-6 mt-16 rounded-lg hover:bg-black hover:text-white">
              <button className=" text-lg" onClick={handleClick}>
                Login
              </button>
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
          className="lg:w-[60%] bg-smoke lg:rounded-[36px] lg:m-3"
          style={{
            backgroundImage: `url(${home})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default Login;
