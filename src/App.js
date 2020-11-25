import './App.css';
import Main_Router from './containers/Main_Router';
import {BrowserRouter as Router} from "react-router-dom";
import React from "react";

function App() {
    return (
      <Router>

          <Main_Router></Main_Router>
      </Router>
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


export default App;
