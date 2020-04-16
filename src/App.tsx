import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Index from './pages/index';
// import Tetris from './pages/tetris';
import Json from './tools/json';
import './App.scss';

function App() {
  return (
    <Router>
      <Route path="/" component={Json} />
    </Router>
  );
}

export default App;
