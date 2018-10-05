import React, { Component } from 'react';
import './styling/App.css';
import Header from './components/Header';
import Login from './components/Login';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    );
  }
}

export default App;
