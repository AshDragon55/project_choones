import React from 'react';
import './App.css';
import Navbar from './ChoonesJS/components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Playing from './ChoonesJS/Playing';
import HeaderChoones from './ChoonesJS/HeaderChoones';
import Musicboard from './ChoonesJS/Musicboard';
import Moods from './ChoonesJS/Moods';
import Home from './ChoonesJS/Home';
import axios from 'axios';
import {useState, useEffect} from 'react';
const CLIENT_ID="2389f6b1020f48a9bddf4050a103e4d7";
const CLIENT_SECRET="44c15351760b4cdd890d7bc63c966dd8";


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/moods' element={<Moods/>} />
          <Route path='/playing' element={<Playing/>} />
          <Route exact path='/musicboard' element={<Musicboard/>} />
        </Routes>
      </Router>
    </>
   
            
  );
}

export default App;