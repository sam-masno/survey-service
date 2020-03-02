import React from 'react';
import ReactDom from 'react-dom';

//redux stuff
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import thunk from 'redux-thunk'

import App from './components/App.jsx';

const store = createStore(reducers , {}, applyMiddleware(thunk));

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('#root') 
);
