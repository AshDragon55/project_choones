
import './App.css';
import HeaderChoones from './ChoonesJS/HeaderChoones';
import Navbar from './ChoonesJS/Navbar';
import Musicboard from './ChoonesJS/Musicboard';
import Moods from './ChoonesJS/Moods';
import Home from './ChoonesJS/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <HeaderChoones/>
      <div className="main">
        <Navbar/>
        <div className='switcher'>
          <Routes>
            <Route exact path='/musicboard' element={<Musicboard/>}></Route>
            <Route exact path='/moods' element={<Moods/>}></Route>
            <Route exact path='/' element={<Home/>}></Route>
          </Routes>
          
        </div>

      </div>
      
    </div>
    </Router>
  );
}

export default App;
