import React from "react";
import Startbutton from "./startbutton";
const header = (props) => {
  return (
    <>
      <div>Color Memory Game</div>
      <Startbutton click={props.startClick} randomColor={props.randomColor} startStyle = {props.startStyle} />
    </>
  );
};

export default header;
