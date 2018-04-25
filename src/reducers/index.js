import { combineReducers } from 'redux';

import accounts from './accounts';
import panel from './panel';
import cards from './cards';
import messages from './messages';
import profile from './profile';
import transactions from './transactions';

const reducers = combineReducers({
   accounts,
   panel,
   cards,
   messages,
   profile,
   transactions
});

export default reducers;
