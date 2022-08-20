import React, {useState} from 'react';

function Moods() {
const [count, setCount] = useState(0);
const [iterationlist, setIterationlist] = useState([]);
const [whichlist, setWhichlist] = useState([]);
const [maxchecked] = useState(3);
const [latestcheck, setLatestcheck] = useState(false);
const [listone, setListone] = useState["happy", "sad", "angry", "love", "heartbroken", "fear", "peace", "greived","disgust"];


  return (
    <div className='moods'>
      <h1>What is Your Mood Today?</h1>
      <h4>Select three icons which describe your mood today.</h4>
      <div className="container1">
          <div className="search-box">
              <i className="bx bx-search"></i>
              <input type="text" placeholder="Search for Mood" />
          </div>
      </div>
      <div className="wrapper">
          <div className="container">
            <input type="checkbox" id="happy" onclick="CountChecks('listone',3,this)" onclick="isChecked()"/>
            <label for="Happy">              
            <h5>Happy</h5>
            </label>            
          </div>
          <div className="container">
            <input type="checkbox" id="sad" onclick="CountChecks('listone',3,this)" onclick="isChecked()"/>
            <label for="Sad">
              
              <h5>Sad</h5>
            </label>
          </div>
          <div className="container">
            <input type="checkbox" id="angry" onclick="CountChecks('listone',3,this)" onclick="isChecked()"/>
            <label for="Angry">
              
              <h5>Angry</h5>  
            </label>
          </div>   
    <div className="wrapper">
        <div className="container">
          <input type="checkbox" id="love" onclick="CountChecks('listone',3,this)" onclick="isChecked()"/>
          <label for="Love">
            
            <h5>In Love</h5>
        </label>
        </div>
        <div className="container">
          <input type="checkbox" id="heartbroken" onclick="CountChecks('listone',3,this)" onclick="isChecked()"/>
          <label for="Heartbroken">
            
            <h5>Heartbroken</h5>
        </label>
        </div>
        <div className="container">
          <input type="checkbox" id="fear" onclick="CountChecks('listone',3,this)" onclick="isChecked()"/>
          <label for="Fear">
            
            <h5>Fearful</h5>
        </label>
        </div>
      <div className="wrapper">
        <div className="container">
          <input type="checkbox" id="peace" onclick="CountChecks('listone',3,this)" onclick="isChecked()"/>
          <label for="Peace">
            
            <h5>Peaceful</h5>
        </label>
        </div>
        <div className="container">
          <input type="checkbox" id="grieved" onclick="CountChecks('listone',3,this)" onclick="isChecked()"/>
          <label for="Grieved">
            
            <h5>Grieved</h5>
        </label>
        </div>
        <div className="container">
          <input type="checkbox" id="disgust" onclick="CountChecks('listone',3,this)" onclick="isChecked()"/>
          <label for="Disgust">
            
            <h5>Disgusted</h5>
        </label>
        </div>
      </div>
    </div>
</div>

        <input type="submit" className="btn" value="Submit" id="btnSubmit" />
    </div>
  );
}

export default Moods;