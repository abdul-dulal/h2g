import React from "react";
import line from "../../../images/assets/underline.png";
import TeamCom from "./TeamCom";
import member1 from "../../../images/team/1.jpg";
import member2 from "../../../images/team/2.jpg";
import member3 from "../../../images/team/3.jpg";
import member4 from "../../../images/team/4.jpg";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
const Team = () => {
  return (
    <div
      id="team"
      className="container lg:h-screen md:h-screen lg:mt-0 mt-0 md:mt-24"
    >
      <div className="text-center space-y-4">
        <p className=" space-x-1 text-xl text-gray-400 ">
          <span className="text-primary">[</span> Meet Our Team
          <span className="text-primary">]</span>
        </p>
        <h2 className=" text-3xl leading-5">MEET THE EXPERTS</h2>
        <img src={line} className="block mx-auto" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          tempora veritatis nemo aut ea iusto eos est <br /> expedita, quas ab
          adipisci consectetur tempora jet.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-10 overflow-hidden">
        <TeamCom
          team1={member1}
          name="Jane Smith"
          title="Web Designer"
          fb={<FaFacebookF />}
          twi={<BsTwitter />}
          google={<BsGoogle />}
          linke={<FaLinkedinIn />}
        />
        <TeamCom
          team1={member2}
          name="SKY YEN"
          title="Graphic Designer"
          fb={<FaFacebookF />}
          twi={<BsTwitter />}
          google={<BsGoogle />}
          linke={<FaLinkedinIn />}
        />
        <TeamCom
          team1={member3}
          name="JULE SHARMIN"
          title="Photographer"
          fb={<FaFacebookF />}
          twi={<BsTwitter />}
          google={<BsGoogle />}
          linke={<FaLinkedinIn />}
        />
        <TeamCom
          team1={member4}
          name="TOMMY HORTON
"
          title="Web Developer"
          fb={<FaFacebookF />}
          twi={<BsTwitter />}
          google={<BsGoogle />}
          linke={<FaLinkedinIn />}
        />
      </div>
    </div>
  );
};

export default Team;
