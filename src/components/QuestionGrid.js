import React from "react";
import ColorBox from "./colorBox";

const QuestionGrid = (props) => {
  console.log(props.Info.answerColors);

  return props.displayState === false ? (
    <div className="Question-Grid invisible"></div>
  ) : (
    <div className="Question-Grid">
      <button
        className="next-level"
        style={props.nextButtonStyle}
        onClick={props.levelStatus}
      >
        Start Level
      </button>

      <div className="box-container">
        {props.Info.realColorsArray.map((eachColor) => (
          <ColorBox color={eachColor} opacity={props.colorChange} />
        ))}
      </div>
    </div>
  );
};

export default QuestionGrid;
