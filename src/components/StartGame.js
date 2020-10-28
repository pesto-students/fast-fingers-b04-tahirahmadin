import React, { useState } from 'react';

export default function StartGame(props) {
  return (
    <div>
      <div className="d-flex flex-column justify-content-between" style={{ height: '80vh', marginTop: 50 }}>
        <div>
          <div className="mt-5">
            <img
              src="img/icon-awesome-keyboard.png"
              srcset="img/icon-awesome-keyboard@2x.png 2x,
             img/icon-awesome-keyboard@3x.png 3x"
              class="Icon-awesome-keyboard"
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
              <hr className="Line-2" />
            </div>
          </div>
          <div className="d-flex flex-row justify-content-center mt-5">
            <input
              type="text"
              class="form-control Rectangle-2 "
              placeholder="TYPE YOUR NAME"
              onChange={(e) => props.setUsername(e.target.value)}
            />
          </div>
          <div class="d-flex flex-row justify-content-center mt-3">
            <select class="custom-select Rectangle-5" id="inputGroupSelect01">
              <option selected>DIFFICULTY LEVEL</option>
              <option value="1">EASY</option>
              <option value="2">MEDIUM</option>
              <option value="3">HARD</option>
            </select>
          </div>
        </div>
        <div>
          <div class="d-flex flex-row justify-content-center">
            <img
              src="img/icon-awesome-play.png"
              srcset="img/icon-awesome-play@2x.png 2x,
             img/icon-awesome-play@3x.png 3x"
              class="Icon-awesome-play"></img>

            <div>
              <h5 className="start-game" onClick={() => props.setScreen(1)}>
                START GAME
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
