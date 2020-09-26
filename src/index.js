import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

let initalState = {
    feeling: null,
    understanding: null,
    support: null,
    comment: ''
};


const feedbackReducer = (state = initalState, action) => {
    if (action.type === "SET_FEELING") {
        let newState = {
            ...state,
            feeling: action.payload
        }
        console.log("in feedbackReducer", newState);
        return newState;
    }
    if (action.type === "SET_UNDERSTANDING") {
        let newState = {
            ...state,
            understanding: action.payload
        }
        console.log("in feedbackReducer", newState);
        return newState;
    }
    if (action.type === "SET_SUPPORT") {
        let newState = {
            ...state,
            support: action.payload
        }
        console.log("in feedbackReducer", newState);
        return newState;
    }
    if (action.type === "SET_COMMENT") {
        let newState = {
            ...state,
            comment: action.payload
        }
        console.log("in feedbackReducer", newState);
        return newState;
    }
    if (action.type === "RESET_STATE") {
        return initalState;
    }
    return state;
};

const store = createStore(
    combineReducers({
        feedbackReducer
    })
);



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
