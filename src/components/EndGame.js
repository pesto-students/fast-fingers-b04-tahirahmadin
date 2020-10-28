import React from 'react';

export default function EndGame(props) {
  return (
    <div className="p-5">
      <div className="row">
        <div className="col-md-3 d-flex flex-column justify-content-between">
          <div>
            <div className="d-flex justify-content-start">
              <img src="img/icon-material-person.png" class="Icon-material-person" />
              <h3 className="player_name_777">TAHIR AHMAD</h3>
            </div>
            <div className="d-flex justify-content-start">
              <img src="img/icon-awesome-gamepad.png" class="Icon-material-person" />
              <h3 className="player_name_777">LEVEL: MEDIUM</h3>
            </div>
          </div>

          <div>
            <div>
              <h5 className="quit" onClick={() => props.setScreen(0)}>
                QUIT
              </h5>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 d-flex flex-column justify-content-center"
          style={{ height: '90vh', alignItems: 'center' }}>
          <div className="SCORE-GAME-5">SCORE : GAME 5</div>
          <div className="final-score mt-5">2:17</div>
          <div className="New-High-Score mt-5">New High Score</div>

          <div style={{ marginTop: 70 }}>
            <div class="d-flex flex-row justify-content-center">
              <img
                src="img/icon-open-reload.png"
                srcset="img/icon-open-reload@2x.png 2x,
             img/icon-open-reload@3x.png 3x"
                class="Icon-open-reload"
              />

              <h5 className="PLAY-AGAIN">PLAY AGAIN</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="mr-5">
            <div className="mb-4">
              <h3 className="fast-fingers-title">fast fingers</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
