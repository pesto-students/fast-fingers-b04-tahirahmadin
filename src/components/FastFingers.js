import React, { useState } from 'react';
import StartGame from './StartGame';
import GameScreen from './GameScreen';
import EndGame from './EndGame';

export default function FastFingers() {
  const [screen, setScreen] = useState(1);
  const [level, setLevel] = useState('EASY');
  const [username, setUsername] = useState('');

  return (
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
        />
      ) : (
        <EndGame
          username={username}
          level={level}
          setUsername={setUsername}
          setLevel={setLevel}
          setScreen={setScreen}
        />
      )}
    </div>
  );
}
