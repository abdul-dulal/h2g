import React, { useState } from "react";
import { MdCall } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { BiRegistered } from "react-icons/bi";
import { FiLogIn } from "react-icons/fi";
import logo from "../../images/logo.png";
import ScrollspyNav from "react-scrollspy-nav";
import Slider from "./Slider";
import SubNav from "./SubNav";
const NavBar = () => {
  const [show, setShow] = useState(false);
  const [showNav, setShownav] = useState(false);
  const hide = () => {
    setShow(!show);
  };
  const change = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setShownav(true);
    } else {
      setShownav(false);
    }
  };
  window.addEventListener("scroll", change);
  let active = "text-red underline";

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
          <div>
            <ScrollspyNav
              scrollTargetIds={[
                "home",
                "about",
                "team",
                "portfolio",
                "plan",
                "blog",
                "contact",
              ]}
              offset={100}
              activeNavClass={{ active }}
              scrollDuration="1000"
              headerBackground="true"
            >
              <ul
                className={`flex gap-7 text-[18px] text-white font-bold mt-2 `}
              >
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#team">Our Team</a>
                </li>
                <li>
                  <a href="#work">Portfolio</a>
                </li>
                <li>
                  <a href="#plan">Plan &amp; Pricing</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </ScrollspyNav>
          </div>
        </div>
      </nav>
      <SubNav show={show} hide={hide} showNav={showNav} />
      <Slider />
    </>
  );
};

export default NavBar;
