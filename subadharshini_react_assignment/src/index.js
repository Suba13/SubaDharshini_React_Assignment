import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/product";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { getWatcher } from "./sagas";
import { createLogger } from "redux-logger";
import { BrowserRouter as Router } from "react-router-dom";
let sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware, createLogger()));
sagaMiddleware.run(getWatcher);
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
