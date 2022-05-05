import { render } from "@testing-library/react";
import React from "react";
import ColorBox from "./colorBox";

const AnswerGrid = (props) => {
  let opa = { opacity: 1 };

  return props.actualLevelStatus === false ? (
    <div className="Answer-Grid invisible"></div>
  ) : (
    <>
      <div className="Answer-Grid">
        <ColorBox color="blue" opacity={opa} answers={props.answers} />
        <ColorBox color="red" opacity={opa} answers={props.answers} />
        <ColorBox color="yellow" opacity={opa} answers={props.answers} />
        <ColorBox color="green" opacity={opa} answers={props.answers} />
        <ColorBox color="purple" opacity={opa} answers={props.answers} />
        <ColorBox color="orange" opacity={opa} answers={props.answers} />
      </div>
      
    </>
  );
};

export default AnswerGrid;
