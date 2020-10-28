import React, { useState, useEffect } from 'react';
import ProgressBar from './CircularProgress';
import MatchedWord from './common/MatchedWord';
const dictionary = require('./../data/dictionary.json');
export default function GameScreen(props) {
  const difficultyCalculator = () => {
    if (props.level === 'EASY') {
      return 1;
    } else if (props.level === 'MEDIUM') {
      return 1.5;
    } else {
      return 2;
    }
  };

  const filteredDictionary = (level) =>
    dictionary.filter((element) => {
      if (level < 1.5) {
        return element.length <= 4;
      } else if (level >= 1.5 && level <= 2) {
        return element.length > 4 && element.length <= 8;
      } else {
        return element.length > 8;
      }
    });

  let nextWord = filteredDictionary(difficultyCalculator())[Math.floor(Math.random() * 50)];

  const [testWord, setTestWord] = useState(nextWord);
  const [enteredWord, setEnteredWord] = useState('');
  const [score, setScore] = useState(0);
  const [difficultyLevel, setDifficultyLevel] = useState(difficultyCalculator());
  const [seconds, setSeconds] = useState(nextWord.length / difficultyCalculator());

  useEffect(() => {
    setTestWord(nextWord);
    console.log(nextWord);
    setSeconds(nextWord.length / difficultyLevel);
  }, []);

  useEffect(() => {
    if (seconds <= 0) {
      quitingGame();
      return;
    }
    const intervalId = setInterval(() => {
      setSeconds((seconds) => seconds - 0.5);
    }, 500);
    return () => clearInterval(intervalId);
  }, [seconds]);

  const handleInput = (e) => {
    setEnteredWord(e.target.value);
    if (testWord === e.target.value) {
      handleCorrect();
      console.log('hit');
    }
  };
  const handleCorrect = () => {
    setDifficultyLevel(difficultyLevel + 0.01);
    setEnteredWord('');
    nextWord = filteredDictionary(difficultyLevel)[Math.floor(Math.random() * 50)];
    setTestWord(nextWord);
    setScore(score + seconds);
    setSeconds(nextWord.length / difficultyLevel);
  };

  const quitingGame = () => {
    props.setScoresList((prevScoreList) => [...prevScoreList, score]);
    props.setScreen(2);
  };
  return (
    <div className="p-5">
      <div className="row">
        <div className="col-md-3">
          <div className="d-flex flex-row justify-content-start">
            <img src="img/icon-material-person.png" class="Icon-material-person" />
            <h3 className="player_name_777">{localStorage.getItem('username')}</h3>
          </div>
          <div className="d-flex flex-row justify-content-start">
            <img src="img/icon-awesome-gamepad.png" class="Icon-material-person" />
            <h3 className="player_name_777">LEVEL: {props.level}</h3>
          </div>
          <div className="Rectangle-10 mt-5 d-none d-md-block">
            <div className="text-center mt-3 ">
              <h4 className="SCORE-BOARD">SCORE BOARD</h4>
              <div className="p-4">
                {props.scoresList.map((score, index) => {
                  return Math.max(...props.scoresList) !== score ? (
                    <p className="Game-1-114">
                      GAME {index}: {score.toFixed(2)}
                    </p>
                  ) : (
                    <div>
                      <p className="PERSONAL-BEST">PERSONAL BEST</p>
                      <p className="Game-1-114">
                        GAME {index}: {score.toFixed(2)}
                      </p>
                    </div>
                  );
                })}
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
                <h5 className="start-game" onClick={quitingGame}>
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
                progress={nextWord.length / difficultyLevel}
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
              <input type="text" class="Rectangle-2 p-3" value={enteredWord} onChange={(e) => handleInput(e)} />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="mr-5">
            <div className="mb-4">
              <h3 className="fast-fingers-title">fast fingers</h3>
            </div>
            <div className="d-flex flex-row justify-content-start">
              <h3 className="SCORE-0030">SCORE: {score.toFixed(2)}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
