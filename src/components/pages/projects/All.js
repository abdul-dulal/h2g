import React, { useEffect, useState } from "react";

const All = () => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    fetch(`Projects.json`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-4 mt-10 lg:px-0 md:px-0 px-10">
      {projects.map((project) => (
        <div>
          <img src={project.image} alt="" />
          <div className="bg-[#f6f6f6] text-center py-5">
            <h2 className="text-primary">{project.title}</h2>
            <p className="text-secondary">{project.subTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default All;
