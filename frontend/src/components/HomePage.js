import React from "react";
import logo from "../assets/logo.jpg";
import food1 from "../assets/food1.jpeg"
import food2 from "../assets/food2.jpeg"
import food3 from "../assets/food3.jpeg"

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
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-navy-blue px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
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
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-yellow block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Team
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Calendar
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Reports
            </a>
          </div>
        </div>
      </nav>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-xl font-bold text-gray-900">Dashboard</p>
        </div>
      </header>
      <main>
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <div class="rounded overflow-hidden shadow-lg">
            <img class="w-full h-50" src={food1} alt="Mountain"></img>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Meenakshi Mess</div>
              <p class="text-gray-700 text-base">
                Located near PSG College of Technology, our mess has to
                be the favourite food attraction of college going Students. 
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #mess_food
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #hostel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #chicken
              </span>
            </div>
          </div>
          <div class="rounded overflow-hidden shadow-lg">
            <img class="w-full h-50" src={food2} alt="River"></img>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Amman Mess</div>
              <p class="text-gray-700 text-base">
                Amman Mess is the second crowded food place
                next to Meenakshi Mess.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #food
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #gilma_biryani
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #amman
              </span>
            </div>
          </div>
          <div class="rounded overflow-hidden shadow-lg">
            <img class="w-full h-50" src={food3} alt="River"></img>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Kalaki</div>
              <p class="text-gray-700 text-base">
                Popular among students by conducting fun activities.
                10% offer for students comming in college ID.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Kalaki
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #juicy_grill
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #offer
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default HomePage;
