import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Coming soon.</h1>
        </header>
        <p className="App-intro">
          Over 10 million americans regularly take anti-depresant medication.  It is an effective treatment option
          and has helped many people lead productive, happy lives. 
          <br/><br/>
          However, physicians don't normally spend the time to explain the process to ween off these medications.
          <br/><br/>
          This application is a tool to assist in finding the proper taper schedule.
          <br/>
          ALWAYS CONSULT YOUR DOCTOR BEFORE MAKING ANY CHANGES TO YOUR MEDICATION!   
        </p>
      </div>
    );
  }
}

export default App;
