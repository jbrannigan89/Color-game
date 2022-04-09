import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AnswerGrid from "./components/AnswerGrid";
import QuestionGrid from "./components/QuestionGrid";

let colorArray = ["blue", "red", "yellow", "green", "purple", "orange"];
console.log(colorArray);

//Start button changing the visibility of the Question Grif
function App() {
  const [questionGrid, setquestionGrid] = useState(false);
  function startClick() {
    setquestionGrid(!questionGrid);
    console.log(questionGrid);
  }
  let selectedColors = [];
  //Getting random color
  function random() {
    for (let i = 0; i < 3; i++) {
      let colorArray = ["blue", "red", "yellow", "green", "purple", "orange"];
      let randomNumber = Math.floor(Math.random() * 6);selectedColors.push(colorArray[randomNumber]);
      return colorArray[randomNumber];
    }
  }

  return (
    <div className="App">
      <Header startClick={startClick} />
      <QuestionGrid displayState={questionGrid} random={random()} />
      <AnswerGrid />
    </div>
  );
}

export default App;
