import React, { Component } from 'react';
import './Checkerboard.css';


const Checker = (props) => {
    var size = Number(props);
    if(size >= 50) size = 49;
    var rows = [];
    for(var i=0;i<size;i++) {
        let cols = [];
        for(var j=0;j<size;j++) {
            if((i+j)%2 === 0) {cols.push(0);}
            else {cols.push(1);}
        }
        rows.push(cols);
    }
    return rows;
}


class Checkerboard extends Component {
    render () {
        var size = prompt("Enter #", "10");
        var arr = Checker(size);
        var colorString = prompt("Enter two colors separated by a space"+ 
                                "(or # followed by 6 characters between(0-9)(a-f))",
        "blue green");
        var colors = colorString.split(" ");
        var yesStyle = {
            height: '40px', 
            width: '42px',
            margin: '-2px',
            display:'inline-block'
        }
        var noStyle = Object.assign({'backgroundColor' : colors[1]}, yesStyle);
        var board = arr.map((row) => {
            var checker = row.map((cell) => {
                if(cell === 0) {
                    yesStyle['backgroundColor'] = colors[0];
                    return <div style={yesStyle}></div>;
                } else {
                    return <div style={noStyle}></div>;
                }
            })
        checker.push(<div></div>);
            return checker;
        })
        return(
            <div>
                {board}
            </div>
        );
    }
}

export default Checkerboard;