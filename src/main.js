import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

// components
import RandomUsersApp from './components/RandomUsersApp.jsx';

// dispatchers
import users from './dispatchers/users';
import filters from './dispatchers/filters';
import serverStatus from './dispatchers/serverStatus';

const randomUserApp = combineReducers({
    users,
    filters,
    serverStatus
});

ReactDOM.render(
    <Provider store={createStore(randomUserApp)}>
        <RandomUsersApp />
    </Provider>,
    document.getElementById("root")
);