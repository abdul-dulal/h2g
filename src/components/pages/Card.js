import React from "react";
import line2 from "../../images/assets/underline2.png";
const Card = ({ icon, tittle }) => {
  return (
    <div className="w-full text-center py-14 space-y-2 border-2 border-gray-400 shadow-sm rounded-sm ">
      <p className="text-5xl flex justify-center text-secondary">{icon} </p>
      <img src={line2} className="block mx-auto" alt="" />
      <h2 className="text-xl font-bold text-primary"> {tittle}</h2>
      <p className="text-secondary">
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit.
      </p>
    </div>
  );
};

export default Card;
