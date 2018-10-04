import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
    
      <div className="App">
        <h1 className="logo"> P R O J E C T&nbsp;&nbsp;&nbsp;&nbsp;3 2&nbsp;&nbsp;&nbsp;&nbsp;L O G O</h1><br/>
        <h2 className="App-header"> Business. Done Smoothly.</h2>
        <Login />
        <span className="signup"> DON'T HAVE AN ACCOUNT? <span className="apply">APPLY</span></span> 
        </div>

    );
  }
}

export default App;
