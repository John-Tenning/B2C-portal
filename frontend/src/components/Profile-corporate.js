import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";
import TextInput from "./Input";

export const Profile = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [companyContact, setCompanyContact] = useState("");
  const [email, setEmail] = useState("");
  const [companyLocation, setcCompanyLocation] = useState("");
  return (
    <div className="">
      <Navbar />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 fles">
          <p className="text-2xl font-bold text-black  px-2 py-0">Profile</p>
        </div>
      </header>
      <h2 className="text-xl font-semibold text- px-5 ml-10 py-6 ">
        Update Profile
      </h2>
      <div className="flex w-screen overflow-hidden px-20 mb-20">
        <div className="flex flex-col justify-start items-start w-[35%]">
          <div className="p-2 w-[50%]">
            <TextInput
              className="mt-8"
              valueState={[email, setEmail]}
              placeholder="Enter Email"
              title="Email"
            />
          </div>
          <div className="p-2 w-[50%]">
            <TextInput
              className="mt-8"
              valueState={[companyName, setCompanyName]}
              placeholder="Enter Comany Name"
              title="Company Name"
            />
          </div>
          <div className="p-2 w-[50%]">
            <TextInput
              className="mt-8"
              valueState={[companyDescription, setCompanyDescription]}
              placeholder="Enter Description"
              title="Company Description"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start w-[35%]">
          <div className="p-2 w-[50%]">
            <TextInput
              className="mt-8"
              valueState={[companyContact, setCompanyContact]}
              placeholder="Enter Contact Details"
              title="Contact Details"
            />
          </div>
          <div className="p-2 w-[50%]">
            <TextInput
              className="mt-8"
              valueState={[companyLocation, setcCompanyLocation]}
              placeholder="Enter Company Location"
              title="Company Location"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-bold bg-yellow-400 text-black  rounded-lg hover:bg-black hover:text-white">
        <button className=" text-lg">Submit</button>
      </div>
      <ContactUs />
    </div>
  );
};

export default Profile;
