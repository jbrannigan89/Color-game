import React from "react";
import ColorBox from "./colorBox";

const QuestionGrid = (props) => {
  let colors = props.random;

  function changeColor(colors) {
    console.log(props.random.map(x => "red"))
  }
  
  return props.displayState === false ? (
    <div className="Question-Grid invisible"></div>
  ) : (
    <div className="Question-Grid">
        <button className="next-level" onClick={props.levelStatus}>
        Start Level
      </button>
     
      <div className="box-container">
        <ColorBox color={colors[0]} />
        <p>{props.random[0]}</p>
        <ColorBox color={colors[1]} />
        <p>{props.random[1]}</p>
        <ColorBox color={colors[2]} />
        <p>{props.random[2]}</p>
      </div>
    </div>
  );
};

export default QuestionGrid;
