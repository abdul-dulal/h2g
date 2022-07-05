import React from "react";

const BlogDemo = ({ img, title, subtitle }) => {
  return (
    <div>
      <div className="bg-[#f1f1f1] border-2 border-[#cccccc] text-center">
        <img src={img} width="100%" alt="" />
        <h2 className="py-5 text-xl text-secondary">{title}</h2>
        <p className="text-secondary">
          Lorem Ipsum is simply dummy text of the <br /> print and typesetting
          industry. Lorem Ipsum been <br /> the industry’s standard
        </p>
        <button className="text-primary my-5 font-bold">Read More</button>
      </div>
    </div>
  );
};

export default BlogDemo;
