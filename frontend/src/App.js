import "./styles/tailwind.output.css";
import Login from "./components/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Home from "./components/HomePage";
import Services from "./components/Service";
import Profile from "./components/Profile"
import Navbar from "./components/Navbar";
// import { NavBar } from "@tgashwinkumar/microservices-library";
const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route index path="/service" element={<Services />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
