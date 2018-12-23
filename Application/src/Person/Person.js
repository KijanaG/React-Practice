import React from 'react';
import styles from './Person.css';
// import Radium from 'radium';

const person = ( props ) => {
    const rnd = Math.random();

    if( rnd > 0.9 ) {
        throw new Error("Soemthing went wrong");
    }

    return (
        <div className={styles.Person} /*style={style}*/>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person; //Radium(person) 