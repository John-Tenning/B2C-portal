import React from "react";
import logo from "../assets/logo.jpg";
import food1 from "../assets/food1.jpeg";
import food2 from "../assets/gym.jpeg";
import food3 from "../assets/saloon.jpg";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";

function HomePage() {
  return (
    <div className="">
      <nav className="bg-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-8" src={logo} alt="Workflow" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-1">
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-navy-blue block  px-3 py-2 rounded-md text-base font-medium"
                  >
                    Home
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-navy-blue px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Services
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-navy-blue px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Explore
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-navy-blue px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>

                  <a
                    href="/Login"
                    className="text-gray-300 hover:bg-gray-700  hover:text-navy-blue pr-28 py-2 rounded-md text-sm font-medium absolute right-20 transition-duration:300"
                  >
                    Login
                  </a>
                  <a
                    href="/Signup"
                    className="text-gray-300 hover:bg-gray-700 hover:text-navy-blue pr-20 py-2 rounded-md text-sm font-medium absolute right-5 transition-duration:300 transition-timing-function:ease-out;"
                  >
                    Signup
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

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
      <footer className=" flex flex-col justify-center items-center font-poppins bg-black p-6">
        <p className="text-white mb-6">Site developed By</p>
        <div className="flex flex-col items-center justify-center space-y-2 lg:flex-row lg:space-y-0 lg:space-x-12">
          <DeveloperItem
            name="Deepak S G "
            github_id="deepaksg0210"
            mail_id="20z213@psgtech.ac.in"
          />
          <DeveloperItem
            name="Krithik R"
            github_id="krithik2208"
            mail_id="20z229@psgtech.ac.in"
          />
          <DeveloperItem
            name="R A Sashti Amar"
            github_id="John-Tenning"
            mail_id="20z247@psgtech.ac.in"
          />
          <DeveloperItem
            name="Viraj Agarwal"
            github_id="Viraj-Agarwal"
            mail_id="20z259@psgtech.ac.in "
          />
        </div>
      </footer>
    </div>
  );
}
export default HomePage;

export const DeveloperItem = ({ name, github_id, mail_id }) => {
  return (
    <div className="font-ubuntu flex flex-col space-y-1 text-white text-center items-center">
      <p className="font-bold">{name}</p>
      <button className="flex space-x-2 items-center group text-xs">
        <AiFillGithub />
        <p className="border-b border-black group-hover:border-white border-dashed">
          {github_id}
        </p>
      </button>
      <button className="flex space-x-2 items-center group text-xs">
        <AiOutlineMail />
        <p className="border-b border-black group-hover:border-white border-dashed">
          {mail_id}
        </p>
      </button>
    </div>
  );
};
