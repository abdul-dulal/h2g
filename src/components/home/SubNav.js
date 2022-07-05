import React from "react";
import logo from "../../images/logo.png";
import { FiAlignJustify } from "react-icons/fi";

const SubNav = ({ show, hide, showNav }) => {
  console.log(show);
  return (
    <nav
      className={`container  sticky top-0 z-10 ${
        show ? "bg-[#232332] p-6" : ""
      }  ${showNav ? "bg-[#232332] p-6 " : ""} `}
    >
      <div className=" flex justify-between mt-3 lg:hidden pb-5  ">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <FiAlignJustify
            onClick={hide}
            className="block ml-auto lg:hidden text-4xl relative text-white
      "
          />
          <ul
            className={`gap-7 text-[16px] font-bold text-white  ${
              show ? "block" : "hidden"
            }`}
          >
            <li>Home</li>
            <li>About</li>
            <li>Our Team</li>
            <li>Work</li>
            <li>Plan &am; Pricing</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SubNav;
