import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
const Photography = () => {
  const [photo, setphoto] = useState([]);
  useEffect(() => {
    fetch("Projects.json")
      .then((res) => res.json())
      .then((data) => setphoto(data.filter((e) => e.status === "graphic")));
  }, []);
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-4 mt-10 lg:px-0 md:px-0 px-10">
      {photo.map((project) => (
        <div className="parent">
          <img src={project.image} alt="" />
          <div className="bg-[#f6f6f6] text-center py-5">
            <h2 className="text-primary">{project.title}</h2>
            <p className="text-secondary">{project.subTitle}</p>
          </div>
          <div className="flex justify-center items-center hello">
            <BsSearch className="text-4xl text-white border-2 border-white rounded-full p-[6px] cursor-pointer" />

            <a href="https://web.facebook.com/" target="blank">
              <AiOutlineLink className="text-4xl text-white border-2 border-white rounded-full p-[6px] ml-3 cursor-pointer" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Photography;
