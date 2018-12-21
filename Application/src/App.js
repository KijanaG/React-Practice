import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name: 'KJ', age: 30},
      {name: 'Billy', age: 33},
      {name: 'Musa', age: 22}
    ]
  }
  switchNameHandler = (newName) => {
    // console.log("Was clicked");
    //Don't Do This this.state.persons[0].name = "Renegade";
    this.setState({
      persons: [
        {name: newName, age: 30},
        {name: 'Billy', age: 33},
        {name: 'Musa', age: 22}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "KJ", age: 30},
        {name: 'Billy', age: 33},
        {name: event.target.value, age: 22}
      ]
    })
  }
  render() {
    const style = {
      backgroundColor: "white",
      font: 'inherit',
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }
    return (
      <div className="App">
        <h1> This is a React App </h1>
        <p>This is working! </p>
        <button style={style} onClick={this.switchNameHandler.bind(this, "Kijana G")}> Switch Name </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={() => this.switchNameHandler("Hogwarto")}> I Hoop. </Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}
        changed={this.nameChangedHandler}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, 
    //        React.createElement('h1',{},"This is a React App!"));
  }
}

export default App;
