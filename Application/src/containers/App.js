import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import CStyles from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    persons : [
      {id: 'dfsa', name: 'KJ', age: 30},
      {id: 'g4vf', name: 'Billy', age: 33},
      {id: 'ng4uo', name: 'Musa', age: 22}
    ],
    showPersons: false,
    toggleClicked: 0
  }
  inputElement = React.createRef();
  switchNameHandler = (newName) => {
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
    this.setState((prevState, props) => {
      return {      
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked +1
      }
    });
  }

  render() {

    let persons = null;

    if(this.state.showPersons) {
      persons = (
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
      );
    }

    return (
      <div ref={this.inputElement} className={CStyles.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          click={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;