import React, { useState, useEffect } from 'react';
import ProgressBar from './CircularProgress';
import MatchedWord from './common/MatchedWord';
const dictionary = require('./../data/dictionary.json');
export default function GameScreen(props) {
  const [testWord, setTestWord] = useState('');
  const [enteredWord, setEnteredWord] = useState('');
  const [score, setScore] = useState(0);
  const [remainingPart, setRemainingPart] = useState(testWord);
  const [difficultyLevel, setDifficultyLevel] = useState(1);
  const [seconds, setSeconds] = useState(200);

  const filteredDictionary = dictionary.filter((element) => {
    if (props.level === 'EASY') {
      return element.length <= 4;
    } else if (props.level === 'MEDIUM') {
      return element.length > 4 && element.length <= 8;
    } else {
      return element.length > 8;
    }
  });
  const difficultyCalculator = () => {
    if (props.level === 'EASY') {
      setDifficultyLevel(1);
    } else if (props.level === 'MEDIUM') {
      setDifficultyLevel(1.5);
    } else {
      setDifficultyLevel(2);
    }
  };

  const handleInput = (e) => {
    setEnteredWord(e.target.value);
    if (testWord === e.target.value) {
      handleCorrect();
      console.log('hit');
    }
  };
  const handleCorrect = () => {
    setEnteredWord('dws');
    setTestWord(filteredDictionary[Math.floor(Math.random() * 50)]);
    setScore(score + seconds);
  };
  useEffect(() => {
    setTestWord(filteredDictionary[Math.floor(Math.random() * 50)]);

    console.log(seconds);
  }, []);
  useEffect(() => {
    if (!seconds) {
      props.setScreen(2);
      return;
    }
    const intervalId = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [seconds]);

  return (
    <div className="p-5">
      <div className="row">
        <div className="col-md-3">
          <div className="d-flex flex-row justify-content-start">
            <img src="img/icon-material-person.png" class="Icon-material-person" />
            <h3 className="player_name_777">{props.username}</h3>
          </div>
          <div className="d-flex flex-row justify-content-start">
            <img src="img/icon-awesome-gamepad.png" class="Icon-material-person" />
            <h3 className="player_name_777">LEVEL: {props.level}</h3>
          </div>
          <div className="Rectangle-10 mt-5">
            <div className="text-center mt-3">
              <h4 className="SCORE-BOARD">SCORE BOARD</h4>
              <div className="p-4">
                <p className="Game-1-114">GAME 1: 1:32</p>
                <p className="Game-1-114">GAME 2: 1:32</p>
                <p className="Game-1-114">GAME 3: 1:32</p>
                <p className="PERSONAL-BEST">PERSONAL BEST</p>
                <p className="Game-1-114">GAME 4: 1:32</p>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div class="d-flex flex-row justify-content-start">
              <img
                src="img/icon-metro-cross.png"
                srcset="img/icon-awesome-play@2x.png 2x,
             img/icon-awesome-play@3x.png 3x"
                class="Icon-awesome-play"></img>

              <div>
                <h5 className="start-game" onClick={() => props.setScreen(2)}>
                  STOP GAME
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex flex-column justify-content-center" style={{ height: '90vh' }}>
            <div className="mb-5">
              <ProgressBar
                progress={10}
                time={seconds}
                size={257}
                strokeWidth={15}
                circleOneStroke="#616161"
                circleTwoStroke="#ff5155"
              />
            </div>
            <div className="text-center mb-5">
              <h1 className="window text-center">
                <MatchedWord testWord={testWord} enteredWord={enteredWord} />
              </h1>
            </div>
            <div classname="Rectangle-9 text-center">
              <input type="text" class="Rectangle-2 p-3" onChange={(e) => handleInput(e)} />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="mr-5">
            <div className="mb-4">
              <h3 className="fast-fingers-title">fast fingers{seconds}</h3>
            </div>
            <div className="d-flex flex-row justify-content-start">
              <h3 className="SCORE-0030">SCORE: {score}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
