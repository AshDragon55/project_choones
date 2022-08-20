import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Moods from './Pages/Moods';
import Playing from './Pages/Playing';

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
   
  );
}

export default App;