import React from 'react';
import CStyles from './Cockpit.css';
// import Aux from '../../hoc/Aux';

const cockpit = ( props ) => {
    const classes = [];
    let btnClass = '';
    if(props.showPersons)
        btnClass = CStyles.Red;

    if(props.persons.length <=2) {
      classes.push(CStyles.red); // classes = ['red']
    }
    if(props.persons.length <=1) {
      classes.push(CStyles.bold); // classes = ['red', 'bold']
    }
    return (
        <>
            <h1> This is a React App </h1>
            <p className={classes.join(' ')}>This is working! </p>
            <button className={btnClass}
            onClick={props.click}>Toggle Persons</button>
        </>
    );
}

export default cockpit;