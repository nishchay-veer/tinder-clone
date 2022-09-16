// import { Switch } from '@mui/material';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import ReactDOM from 'react-dom';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';


function App() {
  return (
    <div className="App">
      {/* <h1><center>Let's build a tinder clone</center></h1> */}

      <Header/>
      <TinderCards/>
      <SwipeButtons/>

    </div>
  );
}

export default App;
