import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* tich hop redux */
import { createStore, applyMiddleware } from 'redux';
import appReducers from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));


serviceWorker.unregister();