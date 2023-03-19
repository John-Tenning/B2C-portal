import React from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isCorporate = "false" }) => {
  const navigate = useNavigate();
  const handleLogut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.success("Logged Out");
    navigate("/");
  };
  return (
    <nav className="bg-grey flex justify-center items-center p-2 font-lato">
      <button className="h-12 px-2 mt-1">
        <Link to="/home">
          <img src={logo} className="h-full w-auto" />
        </Link>
      </button>
      <button className="px-4 hover:bg-slate-400 hover:rounded-lg hover:py-2">
        <Link to="/home">Home</Link>
      </button>
      {isCorporate === "true" && (
        <button className="px-4 hover:bg-slate-400 hover:rounded-lg hover:py-2">
          <Link to="/services">Services</Link>
        </button>
      )}
      {isCorporate === "true" ? (
        <button className="px-4 hover:bg-slate-400 hover:rounded-lg hover:py-2">
          <Link to="/profile_co">Profile</Link>
        </button>
      ) : (
        <button className="px-4 hover:bg-slate-400 hover:rounded-lg hover:py-2">
          <Link to="/profile_cu">Profile</Link>
        </button>
      )}
      <div className="flex-1 w-full"></div>
      <div className="flex">
        <button
          className="px-4 hover:bg-slate-400 hover:rounded-lg hover:py-2"
          onClick={handleLogut}
        >
          <Link to="/">Logout</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
