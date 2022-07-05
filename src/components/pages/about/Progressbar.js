import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Progressbar = ({ completed }) => {
  return (
    <div>
      <ProgressBar
        completed={70}
        bgColor="#626262"
        height="15px"
        labelColor="#ffffff"
        transitionDuration="2s"
        transitionTimingFunction="linear"
        animateOnRender
        dir="auto"
      />
    </div>
  );
};

export default Progressbar;
