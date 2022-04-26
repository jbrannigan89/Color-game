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
          {props.Info.realColorsArray.map((eachColor) => (<ColorBox
          color={eachColor}
          opacity={props.colorChange}
        />
       
          ))}

        {/*   <ColorBox
          color={eachColor}
          opacity={props.colorChange}
        />


{props.tasks.map((task) => (
          <Task key={task.id} task={task} Del= {props.onDelete} />
        ))}



        <p>{eachColor}</p>
        <ColorBox
          color={props.Info.realColorsArray[1]}
          opacity={props.colorChange}
        />
        <p>{props.Info.realColorsArray[1]}</p>
        <ColorBox
          color={props.Info.realColorsArray[2]}
          opacity={props.colorChange}
        />
        <p>{props.Info.realColorsArray[2]}</p>*/}
      </div>
    </div>
  );
};

export default QuestionGrid;
