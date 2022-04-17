import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AnswerGrid from "./components/AnswerGrid";
import QuestionGrid from "./components/QuestionGrid";
import { FaBorderNone } from "react-icons/fa";

let colorArray = ["blue", "red", "yellow", "green", "purple", "orange"];

function App() {
  //Start button changing the visibility of the Question Grid
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

  const colorChange = () => {
    if (startLevel) {
      return  "0" ;
    } else return  "1" ;
  };

  const levelInfo = {
    randomColors: [],
    level: 1,
    answerColors: [],
    realColorsArray: [],
  };
  console.log(levelInfo.realColorsArray);

  random();
  //Getting random color
  function random() {
   
     {
      for (let i = 0; i < 3; i++) {
        let colorArray = ["blue", "red", "yellow", "green", "purple", "orange"];
        let randomNumber = Math.floor(Math.random() * 6);
        levelInfo.randomColors.push(colorArray[randomNumber]);
        levelInfo.realColorsArray.push(colorArray[randomNumber]);
      }
    }
  }

  return (
    <div className="App">
      <Header startClick={startClick} colorChange={colorChange} />
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
