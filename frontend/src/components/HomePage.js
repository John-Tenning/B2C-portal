import React from "react";
import logo from "../assets/logo.png";
import food1 from "../assets/food1.jpeg";
import food2 from "../assets/gym.jpeg";
import food3 from "../assets/saloon.jpg";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";

function HomePage() {
  const username = localStorage.getItem("username");
  const selected = localStorage.getItem("selected");
  console.log(selected);
  return (
    <div className="">
      <Navbar 
        isCorporate="true"
      />
      <header className="bg-white shadow">
        <div className="flex font-lato">
          <div className="py-6 px-4 sm:px-6 flex items-center justify-end w-[20%]">
            <p className="text-xl font-bold text-gray-900 px-2">Dashboard</p>
          </div>
          <div className="flex items-center justify-center py-6 w-[80%] -ml-12">
            <div className="bg-white  rounded-lg flex w-[50%]">
              <input
                type="text"
                className="bg-gray-200 py-2 px-2 rounded-lg w-full"
                placeholder="Search the Market"
              />
              <button className="bg-yellow-600 text-white justify-center p-2 rounded-lg ml-8">
                Search
              </button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="py-24 pl-24 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
          <div className="flex flex-col rounded overflow-hidden shadow-lg w-[80%] font-lato">
            <img className="h-[55%]" src={food1}></img>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Restaurant </div>
              <p className="text-gray-700">
                Meenakshi Restaurant is a family owned and operated restaurant
              </p>
              <br></br>
              <p className="font-bold ">Location: </p>
              <p className="text-gray-700">
                Amman Koil Street, Peelamedu, Coimbatore
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded overflow-hidden shadow-lg w-[80%]">
            <img className="h-[55%]" src={food2}></img>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Gym</div>
              <p className="text-gray-700 text-base">
                Winners Gym is dedicated to providing the best fitness experience
              </p>
              <br></br>
              <p className="font-bold ">Location: </p>
              <p className="text-gray-700">
                Avinashi Road, Peelamedu, Coimbatore
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded overflow-hidden shadow-lg w-[80%]">
            <img className="h-[55%]" src={food3}></img>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Saloon</div>
              <p className="text-gray-700 text-base">
                Get the best salon experience at the comfort of your home
              </p>
              <br></br>
              <p className="font-bold ">Location: </p>
              <p className="text-gray-700">
                RS Puram, Coimbatore, Tamil Nadu
              </p>
            </div>
          </div>
        </div>
      </main>
      <ContactUs />
    </div>
  );
}
export default HomePage;
