import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Ticking clock function resets time every 200 ms

var time = new Date().toLocaleTimeString();
function timer() {
  setInterval(
    () => { 
      time = new Date().toLocaleTimeString();
      document.getElementById('time').innerHTML = time;
      timer();
    },
    200);
}
// const header = React.createElement('h1', null, "Hello Dojo!");
// const list = React.createElement('h3', null, "Things I need to get:");
// const learn = React.createElement('li', null, "Learn React");
// const climb = React.createElement('li', null, "Climb Mt. Everest");
// const run = React.createElement('li', null, "Run a Marathon");
// const feed = React.createElement('li', null, "Feed the Dogs");

class Time extends Component {
  render() {
    timer(); //calls timer f(n)
    return (
      // Time displaying div (with standard React message)
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p id="time"
          className="App-link">
          </p>
        </header>
      </div>

      //
      // <div className="App">
      // {header}
      // {list}
      // <ul>
      //   {learn}
      //   {climb}
      //   {run}
      //   {feed}
      // </ul>
      // </div>
    );
  }
}

export default Time;
