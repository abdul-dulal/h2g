import React from "react";
import line from "../../../images/assets/underline.png";
import Card from "../Card";
import { MdOutlineMonitor } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import Identity from "./Identity";
const About = () => {
  return (
    <>
      <div
        id="about"
        style={{ height: "500px" }}
        className=" flex items-center justify-center lg:h-screen md:h-screen bg-[#f6f6f6] py-12 md:mt-24  lg:mt-0"
      >
        <div>
          <div className="text-center space-y-4">
            <p className=" space-x-1 text-xl text-gray-400 ">
              <span className="text-primary">[</span> About
              <span className="text-primary">]</span>
            </p>
            <h2 className=" text-3xl leading-5 ">We Love to Design</h2>
            <img src={line} className="block mx-auto" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              tempora veritatis nemo aut ea iusto eos est <br /> expedita, quas
              ab adipisci consectetur tempora jet.
            </p>
          </div>
          <div>
            <div className="container  grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
              <Card icon={<FaLeaf />} tittle="GRAPHIC DESIGN" />
              <Card icon={<MdOutlineMonitor />} tittle="WEB DESIGN" />
              <Card icon={<FaMobileAlt />} tittle="MOBILE APPS" />
              <Card icon={<BsFillCameraFill />} tittle="PHOTOGRAPHY" />
            </div>
          </div>
        </div>
      </div>
      <Identity />
    </>
  );
};

export default About;
