import React, { useState } from 'react';
import StartGame from './start-screen/StartScreen';
import GameScreen from './game-screen/GameScreen';
import EndGame from './end-screen/EndScreen';

export default function FastFingers() {
  const [screen, setScreen] = useState(1);
  const [level, setLevel] = useState('EASY');
  const [username, setUsername] = useState('');
  const [scoresList, setScoresList] = useState([]);

  return (
    <div>
      <div>
        {screen === 0 ? (
          <StartGame
            username={username}
            level={level}
            setUsername={setUsername}
            setLevel={setLevel}
            setScreen={setScreen}
          />
        ) : screen === 1 ? (
          <GameScreen
            username={username}
            level={level}
            setUsername={setUsername}
            setLevel={setLevel}
            setScreen={setScreen}
            scoresList={scoresList}
            setScoresList={setScoresList}
          />
        ) : (
          <EndGame
            username={username}
            level={level}
            setUsername={setUsername}
            setLevel={setLevel}
            setScreen={setScreen}
            scoresList={scoresList}
            setScoresList={setScoresList}
          />
        )}{' '}
      </div>
    </div>
  );
}
