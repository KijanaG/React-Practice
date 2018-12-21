import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

//Ticking clock function resets time every 200 ms

// var time = new Date().toLocaleTimeString();
// function Timer() {
//   setInterval(
//     () => { 
//       time = new Date().toLocaleTimeString();
//       var display = "The time is " + time;
//       document.getElementById('time').innerHTML = display;
//       timer();
//     },
//     200);
// }
// Declare components that return elements for rendering
const HeaderComponent = (props) => {
  return React.createElement('h1', null, "Hello Dojo!");
}
const ListComponent = (props) => {
  return React.createElement('h3', null, "Things I need to get:");
}
const LearnComponent = (props) => {
  return React.createElement('li', null, "Learn React");
}
const ClimbComponent = (props) => {
  return React.createElement('li', null, "Climb Mt. Everest");
}

const RunComponent = (props) => {
  return React.createElement('li', null, "Run a Marathon");
}

const FeedComponent = (props) => {
  return React.createElement('li', null, "Feed the Dogs");
}

// const Title = (props) => {
//   console.log("PROPS: ",props);
//   console.log("**********");
//   const { text } = props; // A little bit of destructuring
//   return React.createElement('h1', null, text);
// }
// const Test = (props) => {
//   return React.createElement('div', null,
//       React.createElement(Title, { text: 'Title one!' } ),
//       React.createElement(Title, { text: 'Title two!!' } ),
//       React.createElement(Title, { text: 'Title three!!!' } )
//   )
// }

class App extends Component {
  render() {
    // Timer(); //calls timer f(n)
    return (
      //Time displaying div (with standard React message)
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <p id="time"
      //     className="App-link">
      //     </p>
      //   </header>
      // </div>

      //
      <div className="App">
        <HeaderComponent />
        <ListComponent />
        <ul>
          <LearnComponent />
          <ClimbComponent />
          <RunComponent />
          <FeedComponent />
        </ul>
        {/* <Test /> */}
      </div>
    );
  }
}

export default App;
