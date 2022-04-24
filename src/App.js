import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AnswerGrid from "./components/AnswerGrid";
import QuestionGrid from "./components/QuestionGrid";
import { FaBorderNone } from "react-icons/fa";

function App() {
  const [list, setList] = useState([]);

  const [levelInfo, setlevelInfo] = useState({
    randomColors: [],
    level: 1,
    answerColors: [],
    realColorsArray: [],
  });
  //Getting random color
  function random() {
    {
      for (let i = 0; i < 3; i++) {
        let colorArray = ["blue", "red", "yellow", "green", "purple", "orange"];
        let randomNumber = Math.floor(Math.random() * 6);
        levelInfo.realColorsArray.splice(i, 1, colorArray[randomNumber]);
        levelInfo.realColorsArray.push(colorArray[randomNumber]);
      }
    }
  }
  const [questionGrid, setquestionGrid] = useState(false);
  function startClick() {
    setquestionGrid(!questionGrid);
  }

  //Setting the status of startLevel button
  const [startLevel, setStartLevel] = useState(false);

  const setLevelStatus = () => {
    setStartLevel(!startLevel);
  };
  const nextButtonStyle = () => {
    if (startLevel) {
      return { display: "none" };
    } else return { display: "inline" };
  };
  /*const [opacity, setopacity] = useState(1);
  function yep() {
    setTimeout(setopacity(0), 2000);
  }
  const colorChange = () => {
    if (startLevel) {
      yep();
    } else {
      setopacity(1);
    }
  };
  function myStopFunction() {
    clearTimeout(yep);
  }
  myStopFunction();*/
  const colorChange = () => {
    if (startLevel) {
      return "0";
    } else {
      return "1";
    }
  };
  if (questionGrid && !startLevel) {
    random();
  } else if (questionGrid && startLevel) {
    console.log(levelInfo);
  }

  return (
    <div className="App">
      <Header startClick={startClick} />
      <QuestionGrid
        displayState={questionGrid}
        levelStatus={setLevelStatus}
        actualLevelStatus={startLevel}
        nextButtonStyle={nextButtonStyle()}
        Info={levelInfo}
        colorChange={colorChange()}
      />
      <AnswerGrid displayState={questionGrid} />
    </div>
  );
}

export default App;
