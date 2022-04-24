import React from "react";
import QuestionGrid from "./QuestionGrid";
import AnswerGrid from "./AnswerGrid";
const ColorBox = (props) => {
  let boxStyle = {
    width: "70px",
    height: "50px",
    backgroundColor: props.color,
    opacity: props.opacity,
  };

  return (
    <div className="blackBox" style={{ backgroundColor: "gray" }}>
      <div
        className="box"
        style={boxStyle}
        onClick={() => {
          props.answers(props.color);
        }}
      >
        {" "}
      </div>
    </div>
  );
};

export default ColorBox;
