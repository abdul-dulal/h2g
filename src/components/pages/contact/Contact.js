import React from "react";
import line from "../../../images/assets/underline.png";
import background from "../../../images/contact/1.jpg";
const Contact = () => {
  return (
    <div
      id="contact"
      className="lg:h-screen "
      style={{
        background: `url(${background})`,
      }}
    >
      <div className="text-center space-y-5 py-20 mt-14 ">
        <p className=" space-x-1 text-xl text-white ">
          <span className="text-primary">[</span> Contact
          <span className="text-primary">]</span>
        </p>
        <h2 className=" text-3xl leading-5 text-white ">SAY HELLO TO US</h2>
        <img src={line} className="block mx-auto" alt="" />
        <p className="text-white">
          orem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora{" "}
          <br />
          veritatis nemo aut ea iusto eos est expedita, quas ab adipisci <br />
          consectetur tempora jet.
        </p>
      </div>
      <div className="container lg:flex gap-10 space-y-5 lg:space-y-0">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="py-3 w-[350px]"
        />
        <input
          type="text"
          placeholder="Enter Your Email"
          className="py-3 w-[350px]"
        />
        <input
          type="text"
          placeholder="Enter Your Subject"
          className="py-3 w-[350px]"
        />
      </div>
      <div className="container mt-8">
        <textarea
          placeholder="Enter Your Message"
          className=" lg:w-full w-[350px] py-7"
        ></textarea>
      </div>
    </div>
  );
};

export default Contact;
