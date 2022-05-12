import React from "react";
import Startbutton from "./startbutton";
const header = (props) => {


  return (
    <>
      <h1 className="title">Color Memory Game</h1>
      <Startbutton
        click={props.startClick}
        randomColor={props.randomColor}
        startStyle={props.startStyle}
      />
      <div className="IncorrectAnswers" style={props.WrongAnswer}>
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
