import React from "react";

const Deomo = ({ icon, title }) => {
  return (
    <div>
      <div>
        <div className="flex py-4">
          <span className="lg:p-1 text-primary lg:text-4xl md:text-3xl border-2 rounded-full border-secondary">
            {icon}
          </span>
          <h2 className="lg:mt-3 ml-3 text-[18px] font-bold text-[#626262] ">
            {title}
          </h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, conse adipisicing elit, sed do Eiusmod
        </p>
      </div>
    </div>
  );
};

export default Deomo;
