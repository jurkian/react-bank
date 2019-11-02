import { applyMiddleware, createStore } from 'redux';
import rootReducer from 'reducers';
import { routerMiddleware } from 'connected-react-router';

import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

// Activate Redux DevTools only in dev mode
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import logger from 'redux-logger';

const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, logger, routeMiddleware];

export default function configureStore(initialState) {
   const store = createStore(
      rootReducer(history),
      initialState,
      composeWithDevTools(applyMiddleware(...middlewares))
   );

   return store;
}

export { history };
