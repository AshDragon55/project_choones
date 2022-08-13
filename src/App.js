
import './App.css';
import Navbar from './ChoonesJS/Navbar';
import HeaderChoones from './ChoonesJS/HeaderChoones';
import Musicboard from './ChoonesJS/Musicboard';

function App() {
  return (
    <div className="App">
      <HeaderChoones/>
      <div className='main'> 
        <Navbar/>
        <Musicboard/>
      </div>
    </div>
  );
}

export default App;
