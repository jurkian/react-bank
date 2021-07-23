import { applyMiddleware, createStore, Action } from 'redux';
import rootReducer from 'reducers';
import { routerMiddleware } from 'connected-react-router';

import { createBrowserHistory } from 'history';
import thunk, { ThunkDispatch } from 'redux-thunk';

// Activate Redux DevTools only in dev mode
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import logger from 'redux-logger';

const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, logger, routeMiddleware];

export const store = createStore(
   rootReducer(history),
   composeWithDevTools(applyMiddleware(...middlewares))
);

export { history };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;

// Dispatch with Thunk support
export type AppDispatch = ThunkDispatch<RootState, void, Action>;
