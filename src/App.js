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
    numberofQuestions: 3,
    points: 0,
    clicks: 0,
    IncorrectRound: { right: [], selected: [] },
  });
  //Getting random color

  function random(number) {
    {
      for (let i = 0; i < number; i++) {
        let colorArray = ["blue", "red", "yellow", "green", "purple", "orange"];
        let randomNumber = Math.floor(Math.random() * 6);
        levelInfo.realColorsArray.splice(i, 1, colorArray[randomNumber]);
      }
    }
  }
  const [questionGrid, setquestionGrid] = useState(false);
  function startClick() {
    setquestionGrid(!questionGrid);
  }
  const startButtonStyle = () => {
    if (questionGrid === true) {
      return { display: "none" };
    } else return { display: "inline" };
  };

  //Setting the status of startLevel button
  const [startLevel, setStartLevel] = useState(false);

  const setLevelStatus = () => {
    setStartLevel(!startLevel);
  };

  //Changing the opacity when start level button is pressed
  const colorChange = () => {
    if (startLevel) {
      return "0";
    } else {
      return "1";
    }
  }; //Start Level Button disappearing
  const nextButtonStyle = () => {
    if (startLevel) {
      return { display: "none" };
    } else {
      return { display: "inline" };
    }
  };
  //only call random function when startLevel is false
  if (questionGrid && !startLevel) {
    random(levelInfo.numberofQuestions);
  } else if (questionGrid && startLevel) {
    console.log(levelInfo);
  }
  /*  function answerStatus() {
    for (let i = 0; i < levelInfo.realColorsArray.length; i++) {
      if (levelInfo.realColorsArray[i] !== levelInfo.answerColors[i]) {
        levelInfo.numberofQuestions = 3;
        levelInfo.answerColors = [];
        levelInfo.realColorsArray = [];
        levelInfo.points = 0;
        console.log("Incorrect Answers");
        setLevelStatus();
        return startClick();
      } else {
        console.log("true");
      }
    }

    console.log("correct answers");
    levelInfo.points += 100;
    levelInfo.numberofQuestions += 1;
    console.log(levelInfo.numberofQuestions);
    levelInfo.answerColors = [];
    random(levelInfo.numberofQuestions);
    setLevelStatus();
  }*/
  //Putting the users selected Colors into Info Object
  function answerEntry(color) {
    levelInfo.answerColors.push(color);
    if (
      levelInfo.answerColors.length == levelInfo.realColorsArray.length &&
      levelInfo.answerColors[levelInfo.clicks - 1] ==
        levelInfo.realColorsArray[levelInfo.clicks - 1]
    ) {
      console.log("correct answers");
      levelInfo.points += 100;
      levelInfo.numberofQuestions += 1;
      levelInfo.clicks = 0;
      console.log(levelInfo.numberofQuestions);
      levelInfo.answerColors = [];
      random(levelInfo.numberofQuestions);
      setLevelStatus();
    } else if (
      levelInfo.answerColors[levelInfo.clicks] ==
      levelInfo.realColorsArray[levelInfo.clicks]
    ) {
      return (levelInfo.clicks += 1);
    } else {
      levelInfo.IncorrectRound.right = levelInfo.realColorsArray.slice();
      levelInfo.IncorrectRound.selected = levelInfo.answerColors.slice();
      levelInfo.clicks = 0;
      levelInfo.numberofQuestions = 3;
      levelInfo.answerColors = [];
      levelInfo.realColorsArray = [];
      levelInfo.points = 0;
      console.log("Incorrect Answers");
      setLevelStatus();
      return startClick();
    }
  }

  return (
    <div className="App">
      <Header
        startClick={startClick}
        startStyle={startButtonStyle()}
        Info={levelInfo}
      />
      <QuestionGrid
        displayState={questionGrid}
        levelStatus={setLevelStatus}
        actualLevelStatus={startLevel}
        nextButtonStyle={nextButtonStyle()}
        Info={levelInfo}
        colorChange={colorChange()}
      />
      <AnswerGrid
        displayState={questionGrid}
        answers={answerEntry}
        actualLevelStatus={startLevel}
        Info={levelInfo}
      />
    </div>
  );
}

export default App;
