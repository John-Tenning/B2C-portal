import React, { useState } from "react";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";

const Service = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [companyContact, setCompanyContact] = useState("");
  const [email, setEmail] = useState("");
  const [companyLocation, setcCompanyLocation] = useState("");
  const [companyImages, setCompanyImages] = useState([]);

  return (
    <div className="">
      <Navbar />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 fles">
          <p className="text-2xl font-bold text-yellow-400  px-2 py-0">
            About Company
          </p>
        </div>
      </header>
      <h2 className="text-xl font-semibold text- px-5 ml-10 py-6 mb-4">
        Enter your Company Details Here
      </h2>
      <div className="flex flex-col justify-center items-left ml-20 py-6">
        <div className="flex flex-col justify-center items-center w-1/2">
          <div className="flex flex-col justify-start items-start w-full">
            <p className="text-regular font-lato w-full mt-4">Company Name</p>
            <input 
              type="text"
              className="appearance-none outline-none border-b p-1 w-full border-b-fog"              
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)} 
            />
            <p className="text-regular font-lato w-full mt-4">Company Description</p>
            <input
              type="text"
              className="appearance-none outline-none border-b p-1 w-full border-b-fog"
              value={companyDescription}
              onChange={(e) => setCompanyDescription(e.target.value)}
            />
            <p className="text-regular font-lato w-full mt-4">Company Contact</p>
            <input
              type="text"
              className="appearance-none outline-none border-b p-1 w-full border-b-fog"
              value={companyContact}
              onChange={(e) => setCompanyContact(e.target.value)}
            />
            <p className="text-regular font-lato w-full mt-4">Company Email</p>
            <input
              type="text" 
              className="appearance-none outline-none border-b p-1 w-full border-b-fog"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-regular font-lato w-full mt-4">Company Location</p>
            <input
              type="text"
              className="appearance-none outline-none border-b p-1 w-full border-b-fog"
              value={companyLocation}
              onChange={(e) => setcCompanyLocation(e.target.value)}
            />
            <p className="text-regular font-lato w-full mt-4">Company Images</p>
            <input
              type="file"
              className="appearance-none outline-none border-b p-1 w-full border-b-fog"
              value={companyImages}
              onChange={(e) => setCompanyImages(e.target.value)}
            />
            <button className="bg-yellow-400 text-black-800 mt-4 px-8 py-2 rounded-lg ml-50">
              Submit
            </button>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default Service;
