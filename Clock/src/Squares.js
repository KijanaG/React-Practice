import React, { Component } from 'react';
import './Squares.css';

const BlueComponent = (props) => {
    return React.createElement('div', props, "White On Blue");
}

const RedComponent = (props) => {
    return React.createElement('div', props, "Blue On Red");
}

const PinkComponent = (props) => {
    return React.createElement('div', props, "Green On Pink");
}

class Squares extends Component {
    render() {
        var compStyle = {
                width : "59vh",
                height : "40vh"
        }
        return (
            <div className="Squares">
                <div className="Blue">
                    < BlueComponent style={compStyle}/>
                </div>
                <div className="Red">
                    < RedComponent  style={compStyle}/>
                </div>
                <div className="Pink">
                    < PinkComponent  style={compStyle}/>
                </div>
            </div>
        );
    }
}

export default Squares;