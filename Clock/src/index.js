import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Squares from './Squares';
// import Checkerboard from './Checkerboard';
import Time from './Time';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Squares />, document.getElementById('root'));
ReactDOM.render(<Time />, document.getElementById('root'));
// ReactDOM.render(<Checkerboard />, document.getElementById('root'));
// ReactDOM.render(list, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
