import React from "react";
import QuestionGrid from "./QuestionGrid";
const ColorBox = (props) => {
  let boxStyle = {
    width: "70px",
    height: "50px",
    backgroundColor: props.color,
    border: "1px solid black",
    opacity: props.opacity,
  };

  return (
    <div className="blackBox" style={{ backgroundColor: "gray" }}>
      <div className="box" style={boxStyle}></div>
    </div>
  );
};

export default ColorBox;
