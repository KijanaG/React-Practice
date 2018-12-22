import React from 'react';
import './UserOuput.css';

const userOutput = ( props ) => {
    return (
        <div className="UserOutput">
            <h4> Username: <span>{props.username}</span> </h4>
            {props.input}
            <p>
                The quick brown fox jumped over the rest of this phrase, turned around, 
                smacked it for being what it is and dipped quickly. So quickly in fact
                that they replaced this ridiculous phrase with a new and outstanding "QUOTE" 
            </p>
            <p>
                The quick brown fox jumped over the rest of this phrase, turned around, 
                smacked it for being what it is and dipped quickly. So quickly in fact
                that they replaced this ridiculous phrase with a new and outstanding "QUOTE" - by {props.username}
            </p>
        </div>
    );
}

export default userOutput;
