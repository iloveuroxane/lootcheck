import * as constants from '../actions/constants';
import { read_cookie, bake_cookie } from 'sfcookies';

const SALDO_COOKIE = 'SALDO_COOKIE';

const saldo = (state = 0, action) => {
  const reducers = {
    [constants.AJUSTA_SALDO]: () => action.saldo,
    [constants.DEPOSITAR]: () => state + action.deposito,
    [constants.SACAR]: () => state - action.saque,
    DEFAULT: () => parseInt(read_cookie(SALDO_COOKIE), 10) || state
  };
  const total = (reducers[action.type] || reducers.DEFAULT)();

  bake_cookie(SALDO_COOKIE, total);
  return total;
}

export default saldo;
