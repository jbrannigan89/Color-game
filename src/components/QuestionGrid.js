import React from "react";
import ColorBox from "./colorBox";

const QuestionGrid = (props) => {
  console.log(props.Info.answerColors);

  return props.displayState === false ? (
    <div className="Question-Grid invisible"></div>
  ) : (
    <div className="Question-Grid">
      <button
        className="next-level-button"
        style={props.nextButtonStyle}
        onClick={props.levelStatus}
      >
        Start Level
      </button>

      <div className="box-container">
        {
          /*  {props.Info.realColorsArray.map((eachColor) => (
            let index = props.Info.realColorsArray.indexOf(eachColor);
          if(props.Info.realColorsArray.indexOf(eachColor) == props.Info.answerColors.indexOf(eachColor) 
          return <ColorBox color={eachColor} opacity="1" />*/

          props.Info.realColorsArray.map((eachColor, index) => 
            <ColorBox
              color={eachColor}
              opacity={props.colorChange(index)}
            />
          )
        }
      </div>
      <h3 className="points">Points: {props.Info.points}</h3>
    </div>
  );
};

export default QuestionGrid;
