import React from 'react'
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-grey flex justify-center items-center p-2">
        <div className="flex">
          <div className="h-12 px-2 mt-1">
            <img src={logo} className = "h-full w-auto"/>
          </div>
          <button className="px-4 hover:bg-slate-400 hover:rounded-lg hover:py-2">
            <Link to="/">Home</Link>
          </button>
          <button className="px-4 hover:bg-slate-400 hover:rounded-lg hover:py-2">
          <Link to="/services">Services</Link>
          </button>
          <button className="px-4 hover:bg-slate-400 hover:rounded-lg hover:py-2">Explore</button>
        </div>
        <div className="flex-1 w-full"></div>
        <div className="flex">
          <button className="px-4 hover:bg-slate-400 hover:rounded-lg hover:py-2">
            <Link to="/login">Login</Link>
          </button>
          <button className="px-4 hover:bg-slate-400 hover:rounded-lg hover:py-2">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </nav>
  )
}

export default Navbar