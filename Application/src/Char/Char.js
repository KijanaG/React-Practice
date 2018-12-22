import React from 'react';
import './Char.css';

const char = ( props ) => {
    return (
        <div onClick={props.click} className="Char">
            <h2>{props.letter}</h2>
        </div>
    );
}

export default char;