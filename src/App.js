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
      for (let i = 0; i < 2; i++) {
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
  //Start Level Button disappearing
  const nextButtonStyle = () => {
    if (startLevel) {
      return { display: "none" };
    } else return { display: "inline" };
  };

  //Changing the opacity when start level button is pressed
  const colorChange = () => {
    if (startLevel) {
      return "0";
    } else {
      return "1";
    }
  };
  //only call random function when startLevel is false
  if (questionGrid && !startLevel) {
    random();
  } else if (questionGrid && startLevel) {
    console.log(levelInfo);
  }
  function answerStatus() {
    for (let i = 0; i < levelInfo.realColorsArray.length; i++) {
      if (levelInfo.realColorsArray[i] !== levelInfo.answerColors[i]) {
        return console.log("Incorrect Answers");
      } else {
        console.log("true");
      }
    }

    console.log("correct answers");
  }
  //Putting the users selected Colors into Info Object
  function answerEntry(color) {
    levelInfo.answerColors.push(color);
    if (levelInfo.answerColors.length == levelInfo.realColorsArray.length) {
      console.log("correct length");
      answerStatus();
    }
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
      <AnswerGrid displayState={questionGrid} answers={answerEntry} />
    </div>
  );
}

export default App;
