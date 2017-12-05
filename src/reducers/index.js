import { combineReducers } from 'redux';

import accounts from './accounts';
import auth from './auth';
import cards from './cards';
import homeScreen from './homeScreen';
import messages from './messages';
import profile from './profile';
import transactions from './transactions';

const reducers = combineReducers({
   accounts,
   auth,
   cards,
   homeScreen,
   messages,
   profile,
   transactions
});

export default reducers;