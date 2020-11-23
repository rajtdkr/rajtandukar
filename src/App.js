import './App.css';
import Login from './containers/Login';
import {BrowserRouter as Router} from "react-router-dom";
import React from "react";

function App() {
    return (
      <Router>

          <Login></Login>
      </Router>
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


export default App;
