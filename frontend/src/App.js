import "./styles/tailwind.output.css";
import Login from "./components/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Home from "./components/HomePage";
import Services from "./components/Service";
import Profile_CO from "./components/Profile-corporate"
import Profile_CU from "./components/Profile-customer"

import Navbar from "./components/Navbar";
// import { NavBar } from "@tgashwinkumar/microservices-library";
const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route index path="/services" element={<Services />} />
          <Route index path="/" element={<Home />} />
          <Route path="/profile_co" element={<Profile_CO />} />
          <Route path="/profile_cu" element={<Profile_CU />} />
          

          {/* <Route
            path="/test"
            element={
              <div>
                <NavBar applicationName="NavbarHeader"/>
              </div>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
