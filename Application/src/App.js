import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
// import Radium, { StyleRoot } from 'radium'; //Radium

class App extends Component {
  state = {
    persons : [
      {id: 'dfsa', name: 'KJ', age: 30},
      {id: 'g4vf', name: 'Billy', age: 33},
      {id: 'ng4uo', name: 'Musa', age: 22}
    ],
    showPersons: false
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: "green",
      font: 'inherit',
      color: 'white',
      border: "1px solid grey",
      padding: "8px",
      cursor: "pointer",
      // ":hover": { //Radium
      //   backgroundColor: 'lightgreen',
      //   color: 'black' 
      // }
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
      //style statement inside conditional
      style.backgroundColor = "red";
      // style[':hover'] = { //Radium
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const classes = [];
    if(this.state.persons.length <=2) {
      classes.push('red'); // classes = ['red']
    }
    if(this.state.persons.length <=1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      // <StyleRoot>
      <div className="App">
        <h1> This is a React App </h1>
        <p className={classes.join(' ')}>This is working! </p>
        <button 
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
      // </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, 
    //        React.createElement('h1',{},"This is a React App!"));
  }
}

export default App; //Radium(App)