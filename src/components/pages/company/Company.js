import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CountUp from "react-countup";
const Company = () => {
  return (
    <div className=" bg-primary lg:h-[450px] md:h-[450px] md:mt-[600px] lg:mt-0 mt-14 ">
      <div className="text-center text-white lg:pt-24 pt-14">
        <h2 className=" text-2xl">COMPANY STATISTICS</h2>
        <p>
          Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut
        </p>
      </div>
      <div className="container grid lg:grid-cols-4 md:grid-cols-2 gap-7 mt-14 justify-center pb-10">
        <div className="flex">
          <FaRegPaperPlane className="text-5xl  text-secondary mt-4 " />

          <div className="ml-3">
            <CountUp
              suffix="+"
              duration={2.75}
              end={250}
              className="text-5xl  text-white"
            />
            <p className="text-xl text-white">Projects Completed</p>
          </div>
        </div>
        <div className="flex">
          <FaComment className="text-5xl  text-secondary mt-4 " />

          <div className="ml-3">
            <CountUp
              suffix="+"
              duration={2.75}
              end={300}
              className="text-5xl  text-white"
            />
            <p className="text-xl text-white">Happy Clients</p>
          </div>
        </div>
        <div className="flex">
          <BsFillPeopleFill className="text-5xl  text-secondary mt-4 " />

          <div className="ml-3">
            <CountUp
              suffix="+"
              duration={2.75}
              end={200}
              className="text-5xl  text-white"
            />
            <p className="text-xl text-white">Properties Sold</p>
          </div>
        </div>
        <div className="flex">
          <AiOutlineShoppingCart className="text-5xl  text-secondary mt-4 " />

          <div className="ml-3">
            <CountUp
              suffix="+"
              duration={2.75}
              end={290}
              className="text-5xl  text-white"
            />
            <p className="text-xl text-white">Testimonials Received</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
