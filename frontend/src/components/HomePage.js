import React from "react";
import logo from "../assets/logo.png";
import { toast } from "react-hot-toast";
import food1 from "../assets/food1.jpeg";
import food2 from "../assets/gym.jpeg";
import food3 from "../assets/saloon.jpg";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Services({ type, desc, location, food, phone }) {
  return (
    <div className="flex flex-col rounded overflow-hidden shadow-lg font-lato mb-8 ml-4">
      <img className="h-[55%]" src={food}></img>
      <div className="lg:px-6 lg:py-4">
        <div className="text-xl mb-2">{type} </div>
        <p className="text-gray-700">{desc}</p>
        <br></br>
        <p className="">Location: </p>
        <p className="text-gray-700">{location}</p>
        <p className="text-gray-700 mt-4">Phone : {phone}</p>
      </div>
    </div>
  );
}

function HomePage() {
  const username = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:3002/api/users/name/" + username)
        .then((res) => {
          console.log(res.data);
          setSelected(res.data.role);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("Login First");
      navigate("/");
    }

    axios
      .get("http://localhost:3002/api/services")
      .then((res) => {
        console.log(res.data);
        setServices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(selected);
  return (
    <div className="">
      <Navbar isCorporate={selected === "corporate" ? "true" : "false"} />
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
        <div className="lg:py-24 lg:pl-24 p-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
          {services.map((service) => {
            return (
              <Services
                type={service.name}
                desc={service.description}
                location={service.address}
                food={service.images[0]}
                phone={service.phone}
              />
            );
          })}
        </div>
      </main>
      <ContactUs />
    </div>
  );
}
export default HomePage;
