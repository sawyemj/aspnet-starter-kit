/*
 * src/store.js
 * With initialState
*/
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './_reducers';

const defaultState = {
    session: { supportSessionId: '' },
    health: {
        status: 'OK',
        lastError: {}
    },
    helixTabs: {
        activeTabId: '',
        tabs: new Map()
    },
    featureToggles: {},
    assist: {
        active: false,
        topicId: 0,
        icon: true
    }
};

const enhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export default store;
 