import React from "react";
import line from "../../../images/assets/underline.png";
import bg from "../../../images/pricing/1.jpg";
const Price = () => {
  return (
    <div
      id="plan"
      className="pb-20 mt-20"
      style={{
        background: `url(${bg})`,
        backgroundPosition: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="text-center space-y-5 py-14">
        <p className=" space-x-1 text-xl text-white ">
          <span className="text-primary">[</span> Plan &amp; Pricing
          <span className="text-primary">]</span>
        </p>
        <h2 className=" text-3xl leading-5 text-white ">CHOSE PRICE PLAN</h2>
        <img src={line} className="block mx-auto" alt="" />
      </div>
      <div className="container grid gap-10 lg:grid-cols-3 md:grid-cols-2 mt-14">
        <div className="rounded">
          <div className="bg-secondary text-2xl flex items-center justify-center h-20">
            <h2 className="uppercase text-center text-white">Basic</h2>
          </div>
          <div className="text-center bg-white space-y-5 h-[400px] ">
            <h2 className="text-3xl font-bold text-primary pt-5">$15 </h2>
            <span className="text-secondary text-[16px]">Per Month</span>
            <ul className="space-y-3 text-secondary">
              <li>24 Hour Support</li>
              <li>10 Database</li>
              <li>50 GB Data Alloance</li>
              <li>5 Domain Name Changes </li>
              <li>Up to 10 Users</li>
            </ul>
            <button className=" uppercase  bg-primary px-7 py-3 rounded font-bold text-white hover:skew-x-12 hover:skew-y-2 ">
              Signup Now
            </button>
          </div>
        </div>
        <div className="]">
          <div className="bg-primary text-2xl flex items-center justify-center h-20">
            <h2 className="uppercase text-center text-white">Standard</h2>
          </div>
          <div className="text-center bg-white space-y-5 h-[400px] ">
            <h2 className="text-3xl font-bold text-primary pt-5">$25 </h2>
            <span className="text-secondary text-[16px]">Per Month</span>
            <ul className="space-y-3 text-secondary">
              <li>24 Hour Support</li>
              <li>10 Database</li>
              <li>50 GB Data Alloance</li>
              <li>5 Domain Name Changes </li>
              <li>Up to 10 Users</li>
            </ul>
            <button className=" uppercase  bg-primary px-7 py-3 rounded font-bold text-white hover:skew-x-12 hover:skew-y-2 ">
              Signup Now
            </button>
          </div>
        </div>
        <div className="">
          <div>
            <div className="bg-secondary text-2xl flex items-center justify-center h-20">
              <h2 className="uppercase text-center text-white">Advanced</h2>
            </div>
            <div className="text-center bg-white space-y-5 h-[400px] ">
              <h2 className="text-3xl font-bold text-primary pt-5">$15 </h2>
              <span className="text-secondary text-[16px]">Per Month</span>
              <ul className="space-y-3 text-secondary">
                <li>24 Hour Support</li>
                <li>10 Database</li>
                <li>50 GB Data Alloance</li>
                <li>5 Domain Name Changes </li>
                <li>Up to 10 Users</li>
              </ul>
              <button className=" uppercase  bg-primary px-7 py-3 rounded font-bold text-white hover:skew-x-12 hover:skew-y-2 ">
                Signup Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
