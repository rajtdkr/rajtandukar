import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Store -> Globalised State

//Action Increament

/*const increment = () => {
    return{
        type : 'INCREMENT'
    }
}


const DECREMENT = () => {
    return{
        type : 'DECREMENT'
    }
}


//reducer
const DECREMENT = () => {
    return{
        type : 'DECREMENT'
    }
}*/




//dispatch

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,

    document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
