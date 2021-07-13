import * as H from 'history';

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './auth';
import accounts from './accounts';
import panel from './panel';
import cards from './cards';
import messages from './messages';
import profile from './profile';
import transfers from './transfers';

const getReducers = (history: H.History) =>
   combineReducers({
      router: connectRouter(history),
      auth,
      accounts,
      panel,
      cards,
      messages,
      profile,
      transfers,
   });

export default getReducers;
