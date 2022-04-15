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
    console.log(questionGrid);
  }

  //Setting the status of startLevel button
  const [startLevel, setStartLevel] = useState(false);

  const setLevelStatus = () => {
    setStartLevel(!startLevel);
  };
 

  
  let selectedColors = [];
  //Getting random color
  function random() {
    if (questionGrid === false) {
      return;
    } else if (startLevel == true) {
      return ["gray", "gray", "gray"];
    } else {
      for (let i = 0; i < 3; i++) {
        let colorArray = ["blue", "red", "yellow", "green", "purple", "orange"];
        let randomNumber = Math.floor(Math.random() * 6);
        selectedColors.push(colorArray[randomNumber]);
      }

      return selectedColors;
    }
  }

  return (
    <div className="App">
      <Header startClick={startClick} />
      <QuestionGrid
        displayState={questionGrid}
        random={random()}
        levelStatus={setLevelStatus}
      
      />
      <AnswerGrid displayState={questionGrid} />
    </div>
  );
}

export default App;
