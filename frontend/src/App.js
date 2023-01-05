import "./styles/tailwind.output.css";
import Login from "./components/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
// import { NavBar } from "@tgashwinkumar/microservices-library";
const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Navigate to={"/login"} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
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
