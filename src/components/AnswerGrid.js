import React from "react";
import ColorBox from "./colorBox";

const AnswerGrid = () => {
  return (
    <div className="Answer-Grid">
      <ColorBox color="blue" />
      <ColorBox color="red" />
      <ColorBox color="yellow" />
      <ColorBox color="green" />
      <ColorBox color="purple" />
      <ColorBox color="orange" />
    </div>
  );
};

export default AnswerGrid;
