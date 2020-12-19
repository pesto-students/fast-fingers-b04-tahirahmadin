import React, { useState } from 'react';

export default function StartScreen(props) {
  function handleInput(e) {
    props.setUsername(e.target.value);
    localStorage.setItem('username', e.target.value);
  }
  return (
    <div>
      <div className="d-flex flex-column justify-content-between" style={{ height: '80vh', marginTop: 50 }}>
        <div>
          <div className="mt-5">
            <img
              src="img/icon-awesome-keyboard.png"
              className="Icon-awesome-keyboard"
            />
          </div>

          <h1 className="fast-fingers">fast fingers</h1>
          <div className="d-flex flex-row justify-content-center">
            <div>
              <hr className="Line-1" />
            </div>
            <div>
              <h6 className="the-ultimate-typing-game">the ultimate typing game</h6>
            </div>
            <div>
              {' '}
              <hr className="Line-1" />
            </div>
          </div>
          <div className="d-flex flex-row justify-content-center mt-5">
            <input
              type="text"
              class="form-control Rectangle-2 "
              placeholder="TYPE YOUR NAME"
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div class="d-flex flex-row justify-content-center mt-3">
            <select
              class="custom-select Rectangle-5"
              id="inputGroupSelect01"
              onChange={(e) => props.setLevel(e.target.value)}>
              <option selected>DIFFICULTY LEVEL</option>
              <option value="EASY">EASY</option>
              <option value="MEDIUM">MEDIUM</option>
              <option value="HARD">HARD</option>
            </select>
          </div>
        </div>
        <div className='mt-3'>
          <div className="d-flex flex-row justify-content-center" >
            <img
              src="img/icon-awesome-play.png"
              class="Icon-awesome-play" />


            <h5 className="start-game" onClick={() => props.setScreen(1)}>
              START GAME
              </h5>

          </div>
        </div>
      </div>
    </div >
  );
}
