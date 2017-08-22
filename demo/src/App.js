import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import router from './router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is the main landing</h1>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/about/faq'>Faq</Link>
        <Link to='/people'>People</Link>
        { router }
      </div>
    );
  }
}

export default App;
