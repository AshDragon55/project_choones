import logo from "./logo.svg";
import "./App.css";
import Profile from "./pages/userProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile/>
      </header>
    </div>
  );
}

export default App;
