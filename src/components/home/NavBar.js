import React, { createRef, useState } from "react";
import { MdCall } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { BiRegistered } from "react-icons/bi";
import { FiLogIn } from "react-icons/fi";
import logo from "../../images/logo.png";
import Slider from "./Slider";
import SubNav from "./SubNav";

import FancyButton from "../FancyButton";

import "./global.css";
import ScrollSpy from "react-scrollspy-navigation/dist/ScrollSpy";
const NavBar = () => {
  const [show, setShow] = useState(false);
  const [showNav, setShownav] = useState(false);
  const hide = () => {
    setShow(!show);
  };
  const change = () => {
    if (window.scrollY >= 80) {
      setShownav(true);
    } else {
      setShownav(false);
    }
  };
  window.addEventListener("scroll", change);

  return (
    <>
      <div className=" container  flex justify-between items-center text-white bg-secondary lg:h-10 ">
        <div className="lg:flex  md:flex gap-6 p-2 ">
          <div className="flex items-center ">
            <MdCall className="text-primary font-bold mt-1" />
            <span>01778613474</span>
          </div>
          <div className="flex items-center">
            <CgMail className="text-primary font-bold mt-1" />
            <span>contact@gmail.com</span>
          </div>
        </div>
        <div>
          <ul className="lg:flex md:flex  gap-6">
            <li className="flex items-center">
              <FiLogIn className="text-primary font-bold" />
              Sign in
            </li>
            <li className="flex items-center">
              <BiRegistered className="text-primary font-bold" />
              Register
            </li>
          </ul>
        </div>
      </div>
      <nav
        className={`hidden lg:block  z-50 lg:sticky lg:top-0  w-full mt-5 ${
          showNav ? "bg-[#232332] p-6 " : ""
        }`}
      >
        <div className="container flex justify-between ">
          <div className="">
            <img src={logo} alt="" />
          </div>

          <div className="flex justify-center items-center">
            <ScrollSpy>
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
        </div>
      </nav>
      <SubNav show={show} hide={hide} showNav={showNav} />

      <Slider />
    </>
  );
};

export default NavBar;
