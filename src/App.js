import React from 'react';
import MainNav from './components/MainNav.js';
import Home from './components/Home.js';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainNav />
      <Route exact path="/" render={() => {
        return <Home />;
      }} />
    </div>
  );
}

export default App;
