import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from 'components/App';
import registerServiceWorker from './registerServiceWorker';

// Styles
import './vendor/custom-bootstrap.scss';

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

registerServiceWorker();
