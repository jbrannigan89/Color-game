import React from "react";
import QuestionGrid from "./QuestionGrid";
const ColorBox = (props) => {
  let boxStyle = { width: "70px", height: "50px", backgroundColor: props.color };

  return <div className="box" style={boxStyle}></div>;
};

export default ColorBox;
