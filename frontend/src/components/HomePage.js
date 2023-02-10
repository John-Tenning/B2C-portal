import React from "react";
import logo from "../assets/logo.png";
import food1 from "../assets/food1.jpeg";
import food2 from "../assets/gym.jpeg";
import food3 from "../assets/saloon.jpg";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";


function HomePage() {
  return (
    <div className="">
      <Navbar/>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-xl font-bold text-gray-900">Dashboard</p>
        </div>
      </header>
      <main>
        <div class="py-24 pl-24 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
          <div class="flex flex-col rounded overflow-hidden shadow-lg w-[80%]">
            <img class="h-[55%]" src={food1}></img>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Restaurant </div>
              <p class="text-gray-700 text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div class="flex flex-col rounded overflow-hidden shadow-lg w-[80%]">
            <img class="h-[55%]" src={food2}></img>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Gym</div>
              <p class="text-gray-700 text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div class="flex flex-col rounded overflow-hidden shadow-lg w-[80%]">
            <img class="h-[55%]" src={food3}></img>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Saloon</div>
              <p class="text-gray-700 text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </main>
      <ContactUs/>
    </div>
  );
}
export default HomePage;


