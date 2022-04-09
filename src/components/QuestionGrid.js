import React from "react";
import ColorBox from "./colorBox";

const QuestionGrid = (props) => {
  function random() {
    let colorArray = ["blue", "red", "yellow", "green", "purple", "orange"];
    let randomNumber = Math.floor(Math.random() * 6);
    console.log(randomNumber);
    console.log(colorArray[randomNumber]);
    return colorArray[randomNumber];
  }
  let randomNumber = Math.floor(Math.random() * 6);
  return props.displayState === false ? (
    <div className="Question-Grid invisible"></div>
  ) : (
    <div className="Question-Grid">
      <button className="next-level">Next Level</button>
      <div className="box-container">
        <ColorBox color={props.random} />
        <ColorBox color={props.random} />
        <ColorBox color={props.random} />
      </div>
    </div>
  );
};

export default QuestionGrid;
