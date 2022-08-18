import React from "react";

function Profile() {
  return (
    <div id="profilePage">
      <div id="profilePageLeft">
        <img src={"./public/logo512.png"} id="profilePhoto"  /> <br/>
        <button id="uploadPicture" className="uploadButtons">Change Profile Picture</button> <br/>
        <button id="profileReset" className="uploadButtons">Reset Account Stats</button>
      </div>

      <div id="profilePageRight">
        <h4 className="profileText">Recently you have been:</h4>
        <div>
          <ul className="profileGrid">
            <li id="emotion1">
              Emotion 1<br />
              Percentage
            </li>
            <li id="emotion2">
              Emotion 2<br />
              Percentage
            </li>
            <li id="emotion3">
              Emotion 3<br />
              Precentage
            </li>
            <li id="emotion3">
              Emotion 4<br />
              Percentage
            </li>
          </ul>
        </div>

        <h4 className="profileText">Your top choices:</h4>
        <div>
          <ul className="profileGrid">
            <li id="faveSong1">Song 1</li>
            <li id="faveSong2">Song 2</li>
            <li id="faveSong3">Song 3</li>
            <li id="faveSong4">Song 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
