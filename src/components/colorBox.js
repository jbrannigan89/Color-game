import React from "react";
import QuestionGrid from "./QuestionGrid";
import AnswerGrid from "./AnswerGrid";
import { FaMinus } from "react-icons/fa";
const ColorBox = (props) => {
  let boxStyle = {
    width: "min(10vw, 60px)",
    height: "min(10vw, 60px)",
    backgroundColor: props.color,
    opacity: props.opacity,
  };

  return (
    <div className="blackBox" style={{ backgroundColor: "transparent" }}>
      <div
        className="box"
        style={boxStyle}
        onClick={() => {
          props.answers(props.color);
        }}
      ></div>
    </div>
  );
};

export default ColorBox;
