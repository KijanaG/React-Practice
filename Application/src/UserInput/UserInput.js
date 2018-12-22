import React from 'react';

const userInput = ( props ) => {
    const inputStyle = {
        backgroundColor: "white",
        font: 'inherit',
        border: "2px solid #eee",
        padding: "8px",
        cursor: "pointer"
      }
    return <input type="text" 
            style={inputStyle}
            onChange={props.update} 
            value={props.name} />
}

export default userInput;