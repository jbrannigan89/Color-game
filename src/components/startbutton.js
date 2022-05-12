import React from "react";

const Startbutton = (props) => {
  return (
    <div>
      <button
        className="button"
        onClick={props.click}
        style={props.startStyle}
      >
        Start Game
      </button>
    </div>
  );
};

export default Startbutton;
