import React, { Component } from 'react';
// import { Table, Button } from 'react-bootstrap';
import './Vote.css';

var info = [{"count":0,
            "name":"React"},
            {"count":0,
            "name":"Vue"},
            {"count":0,
            "name":"Angular"},
            {"count":0,
            "name":"Ember"}];
const incrementCount = (lib) => {
    if(lib["name"] === "React") {
        let count = lib["count"] += 1;
        // alert("You voted for React!")
        document.getElementById(lib["name"]).innerHTML = count;
    }
    else if(lib["name"] === "Vue") {
        let count = lib["count"] += 1;
        document.getElementById(lib["name"]).innerHTML = count;
    }
    else if(lib["name"] === "Anuglar") {
        let count = lib["count"] += 1;
        document.getElementById(lib["name"]).innerHTML = count;
    }
    else {
        let count = lib["count"] += 1;
        document.getElementById(lib["name"]).innerHTML = count;
    }
    List();
}
const sort = (info) => {
    var max = 0;
    var curr_max = {};
    var position = -1;
    var check = false;
    for(var i=0; i<info.length; i++) {
        for(var j=i;j<info.length; j++) {
            if(info[j]['count'] > max) {
                max = info[j]['count'];
                curr_max = info[j];
                position = j;
                check = true;
            }
        }
        // console.log("MAX # " +max);
        // console.log("Current Max: ", curr_max);
        // console.log("Position: "+position);
        if(check) {
            let temp = info[i];
            info[i] = curr_max;
            info[position] = temp;
            check = false;
        }
        max = 0;
    }
}

const List = () => {
    console.log("Hellooo");
    sort(info);
    console.log(info);
    const ListItems = info.map((lib, i) => {
        console.log(lib);
        return (
            <div key={i} className="Vote-library">
                <div className="Vote-circle"><h3 id={lib.name}>{lib.count}</h3></div>
                <h1 className="title">{lib.name}</h1>
                <button className="button" onClick={() => incrementCount(lib)}>+</button>
            </div>
        );
    })
    console.log(ListItems);
    return (ListItems);
}

class Vote extends Component {
    render() {
        var items = List();
        return (
            <div className="Vote" >
                <h1 className="Vote-header"> 
                    Vote Your JS Library 
                </h1>
                {items}
                {/* <div className="Vote-library">
                    <div className="Vote-circle"><h3 id="r">{count[0]}</h3></div>
                    <h1 className="title">React</h1>
                    <button className="button" onClick={() => incrementCount(0)}>+</button>
                </div>
                <div className="Vote-library">
                    <div className="Vote-circle"><h3 id="v">{count[1]}</h3></div>
                    <h1 className="title">Vue</h1>
                    <button className="button" onClick={() => incrementCount(1)}>+</button>
                </div>
                <div className="Vote-library">
                    <div className="Vote-circle"><h3 id="a">{count[2]}</h3></div>
                    <h1 className="title">Angular</h1>
                    <button className="button" onClick={() => incrementCount(2)}>+</button>
                </div>
                <div className="Vote-library">
                    <div className="Vote-circle"><h3 id="e">{count[3]}</h3></div>
                    <h1 className="title">Ember</h1>
                    <button className="button" onClick={() => incrementCount(3)}>+</button>
                </div> */}
            </div >
        );
    }
}

export default Vote;