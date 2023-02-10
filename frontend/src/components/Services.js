import React from "react";
import logo from "../assets/logo.jpg";

export const Services = () => {
  return (
    <div className="">
      <nav className="bg-grey flex justify-center items-center">
        <div className="flex">
          <div className="h-12 px-2 mt-1">
            <img src={logo} className="h-full w-auto" />
          </div>
          <button className="p-4">Home</button>
          <button className="p-4">Services</button>
          <button className="p-4">Explore</button>
        </div>
        <div className="flex-1 w-full"></div>
        <div className="flex">
          <button className="p-4">Login</button>
          <button className="p-4">Sign Up</button>
        </div>
      </nav>
      <header className="bg-white shadow">
        <div className="max-w-8xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {/* <p className="text-2xl font-bold text-gray-900">Services</p> */}
          <div className="flex">
            <p className="text-xl font-bold text-gray-900 mr-5">Services</p>
            <div className="bg-white p-0 rounded-lg shadow-lg flex">
              <input
                type="text"
                className="bg-gray-200 p-0  px-5 rounded-lg w-full"
                placeholder="Search"
              />
              <button className="bg-blue-500 text-white p-2 rounded-lg ml-2">
                Search
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Services;
