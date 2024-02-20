import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const pitcherList = (state = ['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'], action) => {
    if (action.type === 'PITCHERLIST_ADD') {
        return [...state, action.payload];
    }
    return state;
}

const catcherList = (state = ['Roy Campanella', 'Elston Howard', 'Kenji Jojima'], action) => {
    if (action.type === 'CATCHERLIST_ADD') {
        return [...state, action.payload];
    }
    return state;
}

const storeInstance = createStore(combineReducers({pitcherList, catcherList}), applyMiddleware(logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
