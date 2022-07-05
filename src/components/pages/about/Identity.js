import React from "react";

import { AiFillDropboxCircle } from "react-icons/ai";
import { BsLightbulb } from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";
import { MdAutoGraph } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

import Deomo from "./Deomo";
import Progressbar from "./Progressbar";
import ProgressBar from "@ramonak/react-progress-bar";
const Identity = () => {
  return (
    <div className="lg:h-screen container py-12 mt-14">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-10 mt-4 ">
        <div className="">
          <h1 className="text-center">WHO WE ARE?</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim ve niam, quis nostruden exercitation ullamco
          </p>
          <div className="grid grid-cols-2 gap-6">
            <Deomo icon={<AiFillDropboxCircle />} title="OUT OF THE BOX" />
            <Deomo icon={<BsLightbulb />} title="OUR CREATIVITY" />
            <Deomo icon={<AiTwotoneSetting />} title="LATEST TECHNOLOGY" />
            <Deomo icon={<MdAutoGraph />} title="SEO OPTIMIZED" />
          </div>
        </div>
        <div className="bg-primary py-14">
          <h2 className="my-5 ml px-5 text-2xl text-white font-bold">
            Our Skills
          </h2>
          <div className="px-5">
            <p className=" font-bold text-white py-3">GRAPHIC DESIGN</p>
            <Progressbar />
            <p className=" font-bold text-white py-3"> HTML5</p>
            <ProgressBar
              completed={90}
              bgColor="#626262"
              height="15px"
              labelColor="#ffffff"
              transitionDuration="2s"
              transitionTimingFunction="linear"
              animateOnRender
              dir="auto"
            />
            <p className=" font-bold text-white py-3"> CSS3</p>
            <ProgressBar
              completed={100}
              bgColor="#626262"
              height="15px"
              labelColor="#ffffff"
              transitionDuration="2s"
              transitionTimingFunction="linear"
              animateOnRender
              dir="auto"
            />
            <p className=" font-bold text-white py-3 "> BOOTSTRAP</p>
            <ProgressBar
              completed={90}
              bgColor="#626262"
              height="15px"
              labelColor="#ffffff"
              transitionDuration="2s"
              transitionTimingFunction="linear"
              animateOnRender
              dir="auto"
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center mt-14">
          <span className="text-2xl text-primary">[</span>{" "}
          <FaFacebookF className="text-secondary text-xl m-2 hover:text-primary" />
          <span className="text-2xl text-primary ">]</span>
          <span className="text-2xl text-primary ml-4">[</span>
          <BsTwitter className="text-secondary text-xl m-2 hover:text-primary" />
          <span className="text-2xl text-primary">]</span>
          <span className="text-2xl text-primary ml-4">[</span>{" "}
          <ImYoutube className="text-secondary text-xl m-2 hover:text-primary" />
          <span className="text-2xl text-primary">]</span>
          <span className="text-2xl text-primary ml-4">[</span>{" "}
          <FaLinkedinIn className="text-secondary text-xl m-2 hover:text-primary" />
          <span className="text-2xl text-primary">]</span>
          <span className="text-2xl text-primary ml-4">[</span>{" "}
          <BsGoogle className="text-secondary text-xl m-2 hover:text-primary" />
          <span className="text-2xl text-primary">]</span>
          <span className="text-2xl text-primary ml-4">[</span>{" "}
          <BsGithub className="text-secondary text-xl m-2 hover:text-primary" />
          <span className="text-2xl text-primary">]</span>
        </div>
      </div>
    </div>
  );
};

export default Identity;
