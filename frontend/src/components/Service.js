import React, { useState } from "react";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";
import TextInput from "./Input";

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
          <p className="text-2xl font-bold text-black  px-2 py-0">
            About Company
          </p>
        </div>
      </header>
      <h2 className="text-xl font-semibold text- px-5 ml-10 py-6 mb-4">
        Enter your Company Details Here
      </h2>
      {/* get input for the above details in two columns each consisting of 3rows*/}
      <div className="flex justify-start items-center w-full">
        <div className="flex items-left ml-20 w-1/3">
          <div className="flex flex-col  justify-start w-full">
            <div className="flex flex-col items-start">
              <TextInput
                className="mt-8"
                valueState={[companyName, setCompanyName]}
                placeholder="Enter Company Name"
                title="Company Name"
              />
              <TextInput
                className="mt-8"
                valueState={[companyDescription, setCompanyDescription]}
                placeholder="Enter Company Description"
                title="Company Description"
              />
              <TextInput
                className="mt-8"
                valueState={[companyContact, setCompanyContact]}
                placeholder="Enter Company Contact"
                title="Company Contact"
              />
            </div>
          </div>
        </div>
        <div className="flex items-left ml-20 w-1/3">
          <div className="flex justify-start w-full">
            <div className="flex flex-col items-start">
              <TextInput
                className="mt-8"
                valueState={[email, setEmail]}
                placeholder="Enter Email"
                title="Email"
              />
              <TextInput
                className="mt-8"
                valueState={[companyLocation, setcCompanyLocation]}
                placeholder="Enter Company Location"
                title="Company Location"
              />
              <TextInput
                className="mt-8"
                valueState={[companyImages, setCompanyImages]}
                placeholder="Enter Company Images"
                title="Company Images"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-bold bg-yellow-400 text-black py-2  mt-16 mb-10 rounded-lg hover:bg-black hover:text-white">
        <button className=" text-lg">Submit</button>
      </div>
      <ContactUs />
    </div>
  );
};

export default Service;
