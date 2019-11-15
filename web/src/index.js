import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from 'components/App';
import * as serviceWorker from './serviceWorker';

// Store
import configureStore, { history } from 'store';
import { ConnectedRouter } from 'connected-react-router';

export const store = configureStore();

// Render
ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <ConnectedRouter history={history}>
            <App />
         </ConnectedRouter>
      </BrowserRouter>
   </Provider>,
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
