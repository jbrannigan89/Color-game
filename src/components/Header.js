import React from "react";
import Startbutton from "./startbutton";
const header = (props) => {
  return (
    <>
      <div>Color Memory Game</div>
      <Startbutton
        click={props.startClick}
        randomColor={props.randomColor}
        startStyle={props.startStyle}
      />
      <div className="IncorrectAnswers" style={props.startStyle}>
        <h2>Incorrect</h2>
        <h4>
          Colors selected: {props.Info.IncorrectRound.selected.join(", ")}
        </h4>
        <h4>Correct colors: {props.Info.IncorrectRound.right.join(", ")}</h4>
      </div>
    </>
  );
};

export default header;
