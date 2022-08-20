import React, {useState, useEffect}from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Moods from './Pages/Moods';
import Playing from './Pages/Playing';
import HeaderChoones from './ChoonesJS/HeaderChoones';
import Musicboard from './ChoonesJS/Musicboard';
import axios from 'axios';

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
          <Route exact path='/musicboard' element={<Musicboard/>}></Route>
        </Routes>
      </Router>
    </>
   
  );
}

export default App;
