import { combineReducers } from 'redux';

import accounts from './accounts';
import panel from './panel';
import cards from './cards';
import homeScreen from './homeScreen';
import messages from './messages';
import profile from './profile';
import transactions from './transactions';

const reducers = combineReducers({
   accounts,
   panel,
   cards,
   homeScreen,
   messages,
   profile,
   transactions
});

export default reducers;
