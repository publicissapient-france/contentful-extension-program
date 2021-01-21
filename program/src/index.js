import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import logger from 'redux-logger';

import { init } from 'contentful-ui-extensions-sdk';

import App from './containers/App';

const initialState = {
    sessions : {
        duration : '',
        pricing : {},
        schedule : []
    }
};

const store = createStore(rootReducer, initialState, applyMiddleware(logger));

init(extension => {
    ReactDOM.render(
    <Provider store={store}>
        <App extension={extension} store={store} />
    </Provider>,
    document.getElementById('root')
);
});
