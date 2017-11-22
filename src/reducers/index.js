import { combineReducers } from 'redux';

import bitcoin from './bitcoin';
import saldo from './balance';

export default combineReducers({
  saldo, bitcoin
});