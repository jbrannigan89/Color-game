import React from "react";
import ColorBox from "./colorBox";

const QuestionGrid = (props) => {
  console.log(props.colorChange);

  return props.displayState === false ? (
    <div className="Question-Grid invisible"></div>
  ) : (
    <div className="Question-Grid">
      <button className="next-level" onClick={props.levelStatus}>
        Start Level
      </button>

      <div className="box-container">
        <ColorBox
          color={props.Info.realColorsArray[0]}
          opacity={props.colorChange}
        />
        <p>{props.Info.realColorsArray[0]}</p>
        <ColorBox
          color={props.Info.realColorsArray[1]}
          opacity={props.colorChange}
        />
        <p>{props.Info.realColorsArray[1]}</p>
        <ColorBox
          color={props.Info.realColorsArray[2]}
          opacity={props.colorChange}
        />
        <p>{props.Info.realColorsArray[2]}</p>
      </div>
    </div>
  );
};

export default QuestionGrid;
