import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
import Game from './components/Game/Game.jsx'
import  Home from './components/Home/Home.jsx'

function App() {
  return ( 
    <Router>
      <Route exact path="/" component={Home}/> 
      <Route exact path="/game" component={Game} />
    </Router>
  );
}

export default App;
