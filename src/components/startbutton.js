import React from "react";

const Startbutton = (props) => {
  return (
    <div>
      <button className="start-button" onClick={props.click}>
        Start Game
      </button>
    </div>
  );
};

export default Startbutton;
