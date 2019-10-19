import React from 'react';
import MainNav from './components/MainNav.js';
import Home from './components/Home.js';
import Gallery from './components/Gallery.js';
import Tribute from './components/Tribute.js';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainNav />
      <Route exact path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/tribute" component={Tribute} />
    </div>
  );
}

export default App;
