import React from "react";
import ColorBox from "./colorBox";

const AnswerGrid = (props) => {
  let opa = { opacity: 1 };

  return props.displayState === false ? (
    <div className="Answer-Grid invisible"></div>
  ) : (
    <div className="Answer-Grid">
      <ColorBox color="blue" opacity={opa} />
      <ColorBox color="red" opacity={opa} />
      <ColorBox color="yellow" opacity={opa} />
      <ColorBox color="green" opacity={opa} />
      <ColorBox color="purple" opacity={opa} />
      <ColorBox color="orange" opacity={opa} />
    </div>
  );
};

export default AnswerGrid;
