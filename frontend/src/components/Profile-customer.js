import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";

export const Profile = () => {
  return (
    <div class="h-screen flex flex-col">
      <Navbar isCorporate="false" />

      <div class="flex justify-center py-16 flex-1">
        <div class="flex items-center    bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-blue-200 p-8">
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={logo}
              alt="Dummy image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Customer
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              20z259@psgtech.ac.in
            </span>
            <div class="flex mt-4 space-x-3 md:mt-6">
              <a
                href="./Home"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Visit Homepage
              </a>
              <a
                href=""
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              >
                Change Password
              </a>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default Profile;
