import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Moods from './Pages/Moods';
import Playing from './Pages/Playing';
import HeaderChoones from './ChoonesJS/HeaderChoones';
import Navbar from './ChoonesJS/Navbar';
import Musicboard from './ChoonesJS/Musicboard';
import Moods from './ChoonesJS/Moods';
import Home from './ChoonesJS/Home';
import axios from 'axios';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

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
        </Routes>
      </Router>
    </>
   
            <Route exact path='/musicboard' element={<Musicboard/>}></Route>
  );
}

export default App;