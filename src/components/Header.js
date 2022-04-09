import React from "react";
import Startbutton from "./startbutton";
const header = (props) => {
  return (
    <>
      <div>Color Memory Game</div>
      <Startbutton click={props.startClick}  />
          
    </>
  );
};

export default header;
