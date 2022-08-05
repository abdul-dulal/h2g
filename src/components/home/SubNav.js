import React, { createRef } from "react";
import logo from "../../images/logo.png";
import { FiAlignJustify } from "react-icons/fi";
import ScrollSpy from "react-scrollspy-navigation/dist/ScrollSpy";
import FancyButton from "../FancyButton";

const SubNav = ({ show, hide, showNav }) => {
  return (
    <nav
      className={`container  sticky top-0 z-10 ${
        show ? "bg-[#232332] p-6" : ""
      }  ${showNav ? "bg-[#232332] p-6 " : ""} `}
    >
      <div className=" lg:hidden flex justify-between   ">
        <div className="">
          <img src={logo} className="" alt="" />
        </div>
        <div>
          <FiAlignJustify
            onClick={hide}
            className="block ml-auto lg:hidden text-4xl relative text-white"
          />
          <ul
            className={` text-[16px] font-bold text-white  ${
              show ? "block" : "hidden"
            }`}
          >
            <div className="">
              <ScrollSpy className="">
                <FancyButton href="#home" text="Home" ref={createRef()} />
                <FancyButton href="#about" text="About" ref={createRef()} />
                <FancyButton href="#team" text="Our Team" ref={createRef()} />
                <FancyButton href="#work" text="Portfolio" ref={createRef()} />
                <FancyButton
                  href="#plan"
                  text="Plan &amp; Price"
                  ref={createRef()}
                />
                <FancyButton href="#blog" text="Blog" ref={createRef()} />
                <FancyButton href="#contact" text="Contact" ref={createRef()} />
              </ScrollSpy>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SubNav;
