import React from "react";

const Button = ({ children }) => {
  return (
    <div className="block mx-auto">
      <button className="uppercase  bg-primary px-7 py-3 rounded font-bold text-white hover:skew-x-12 hover:skew-y-2">
        {children}
      </button>
    </div>
  );
};

export default Button;
