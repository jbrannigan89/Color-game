import React from "react";
import QuestionGrid from "./QuestionGrid";
const ColorBox = (props) => {
  let boxStyle = {
    width: "70px",
    height: "50px",
    backgroundColor: props.color,

    opacity: props.opacity,
  };

  return (
    <div className="blackBox" style={{ backgroundColor: "gray" }}>
      <div className="box" style={boxStyle} onClick={() => { console.log(props.color) }}></div>
    </div>
  );
};

export default ColorBox;
