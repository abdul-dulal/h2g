import React, { useState } from "react";
import line from "../../../images/assets/underline.png";
import All from "./All";
import Graphic from "./Graphic";
import Photography from "./Photography";
import Printing from "./Printing";
import Web from "./Web";
const Projects = () => {
  const [show, setShow] = useState("all");
  return (
    <div id="work" className="">
      <div className=" flex justify-center items-center mt-20">
        <div>
          <div className="text-center space-y-4">
            <p className=" space-x-1 text-xl text-gray-400 ">
              <span className="text-primary">[</span> Portfolio
              <span className="text-primary">]</span>
            </p>
            <h2 className=" text-3xl leading-5 ">PORTFOLIOS</h2>
            <img src={line} className="block mx-auto" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              tempora veritatis nemo aut ea iusto eos est <br /> expedita, quas
              ab adipisci consectetur tempora jet.
            </p>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex justify-center lg:gap-10 gap-3 mt-10">
          <li
            onClick={() => setShow("all")}
            className={`cursor-pointer ${
              show === "all" && "lg:text-xl lg:font-bold text-primary"
            }`}
          >
            ALL
          </li>
          <li
            onClick={() => setShow("web")}
            className={`cursor-pointer ${
              show === "web" && "lg:text-xl lg:font-bold text-primary"
            }`}
          >
            WEB DESIGN
          </li>
          <li
            onClick={() => setShow("graphic")}
            className={`cursor-pointer ${
              show === "graphic" && "lg:text-xl lg:font-bold text-primary"
            }`}
          >
            GRAPHIC
          </li>
          <li
            onClick={() => setShow("pho")}
            className={`cursor-pointer ${
              show === "pho" && "lg:text-xl lg:font-bold text-primary"
            }`}
          >
            PHOTOGRAPHY
          </li>
          <li
            onClick={() => setShow("pri")}
            className={`cursor-pointer ${
              show === "pri" && "lg:text-xl lg:font-bold text-primary"
            }`}
          >
            PRINTING
          </li>
        </ul>
      </div>
      <div>
        {show === "all" && <All />}
        {show === "web" && <Web />}
        {show === "graphic" && <Graphic />}
        {show === "pho" && <Photography />}
        {show === "pri" && <Printing />}
      </div>
    </div>
  );
};

export default Projects;
