import './vendor/custom-bootstrap.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

import App from './components/App';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';

// Default axios settings
axios.defaults.baseURL = 'http://localhost:3001';

// Activate Redux DevTools only in dev mode
const composeEnhancers =
   process.env.NODE_ENV === 'development'
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : null || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>,
   document.getElementById('root')
);

registerServiceWorker();
