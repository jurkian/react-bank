import { combineReducers } from 'redux';

import auth from './auth';
import accounts from './accounts';
import panel from './panel';
import cards from './cards';
import messages from './messages';
import profile from './profile';
import transactions from './transactions';
import modal from './modal';

const reducers = combineReducers({
   auth,
   accounts,
   panel,
   cards,
   messages,
   profile,
   transactions,
   modal
});

export default reducers;
