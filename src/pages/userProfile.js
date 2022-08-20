import React from "react";
import { useState } from "react";

function Profile() {
  const defaultImg1 = require("../images/3518.png");
  const defaultImg2 = require("../images/sad.png");
  const defaultImg3 = require("../images/anxious.png");
  const defaultImg4 = require("../images/smile.png");
  

  const [profilePicture, setprofilePicture] = useState(defaultImg1);
  const [uploadedImg, setuploadedImg] = useState(null)

  const [count, setCount] = useState(0)
 
  const randomPhoto = () => {
    
    setCount(count+1);
   
    if ((count=="0")) {
      setprofilePicture(defaultImg2);
    } else if ((count=="1")) {
      setprofilePicture(defaultImg3);
    } else if ((count=="2")) {
      setprofilePicture(defaultImg4);
    } else if ((count=="3")) {
      setprofilePicture(defaultImg1);
      setCount(0);
    }
  };

  const uploadPhoto = () => {
    //(event) => {setuploadedImg(event.target.files[0])}
  }

  return (
    <div id="profilePage">
      <div id="profilePageLeft">
        <img
          src={profilePicture}
          id="profilePhoto"
          alt="A man sad over fallen pizza"
        />
        <br />
        <button
          id="randomPicture"
          className="uploadButtons"
          onClick={randomPhoto}
        >
          Random Profile Picture
        </button>
        <br />
      
        <button id="profileReset" className="uploadButtons">
          Reset Account Stats
        </button>
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
