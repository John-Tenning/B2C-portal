import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";

const ContactUs = () => {
  return (
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
  );
};

export default ContactUs;

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
