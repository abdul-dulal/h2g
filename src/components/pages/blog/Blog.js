import React from "react";
import line from "../../../images/assets/underline.png";
import BlogDemo from "./BlogDemo";
import img1 from "../../../images/news/1.jpg";
import img2 from "../../../images/news/2.jpg";
import img3 from "../../../images/news/3.jpg";
const Blog = () => {
  return (
    <div id="blog" className="lg:h-screen">
      <div className="text-center space-y-5 py-14">
        <p className=" space-x-1 text-xl text-gray-400 ">
          <span className="text-primary">[</span> Blog
          <span className="text-primary">]</span>
        </p>
        <h2 className=" text-3xl leading-5 ">OUR LATEST NEWS</h2>
        <img src={line} className="block mx-auto" alt="" />
      </div>
      <div className="container grid lg:grid-cols-3 md:grid-cols-2 gap-7">
        <BlogDemo title="WE ARE STORYTELLERS" img={img1} />
        <BlogDemo title="WE ARE STORYTELLERS" img={img2} />
        <BlogDemo title="WE ARE STORYTELLERS" img={img3} />
      </div>
    </div>
  );
};

export default Blog;
