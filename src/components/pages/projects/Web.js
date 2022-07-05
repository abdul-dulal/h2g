import React, { useEffect, useState } from "react";

const Web = () => {
  const [bal, setbal] = useState([]);
  useEffect(() => {
    fetch(`Projects.json`)
      .then((res) => res.json())
      .then((data) => setbal(data.filter((e) => e.status === "web")));
  }, []);
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-4 mt-10 lg:px-0 md:px-0 px-10 relative">
      {bal.map((project) => (
        <div>
          <div className="">
            <img
              src={project.image}
              className="transfrom hover:scale-105 duration-1000 overflow-hidden	"
              alt=""
            />
          </div>
          <div className="bg-[#f6f6f6] text-center py-5">
            <h2 className="text-primary">{project.title}</h2>
            <p className="text-secondary">{project.subTitle}</p>
          </div>
          <div className="h-[190px] w-[265px] bg-secondary absolute top-0 m-3 "></div>
        </div>
      ))}
    </div>
  );
};

export default Web;
