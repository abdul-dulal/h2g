import React from "react";

const TeamCom = ({ team1, name, title, fb, twi, google, linke }) => {
  return (
    <div>
      <img src={team1} className="block mx-auto" alt="" />
      <div className="text-center">
        <h2 className="text-2xl text-primary">{name}</h2>
        <p className="font-bold text-secondary">{title}</p>
        <p>
          Lorem ipsum dolor sit amet, cons ectetur adipiscing elit Quisque
          rutrum pellentesque imperdiet
        </p>
        <div className="flex space-x-3 justify-center mt-3">
          <span className="text-xl p-2 border-2 text-secondary cursor-pointer border-primary rounded-full hover:text-primary">
            {fb}
          </span>
          <span className="text-xl p-2 border-2 text-secondary cursor-pointer border-primary rounded-full hover:text-primary">
            {twi}
          </span>
          <span className="text-xl p-2 border-2 text-secondary cursor-pointer border-primary rounded-full hover:text-primary">
            {linke}
          </span>
          <span className="text-xl p-2 border-2 text-secondary cursor-pointer border-primary rounded-full hover:text-primary">
            {google}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TeamCom;
