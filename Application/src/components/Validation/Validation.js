import React from 'react';

const validation = ( props ) => {
    var size;
    if(props.length > 10)
        size = "Too Long!";
    else if(props.length === 10)
        size = "Just Right";
    else
        size = "Too Short!";
    return (
        <div> 
            <h3>{size}</h3>
        </div>
    );
}

export default validation;