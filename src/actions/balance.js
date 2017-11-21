import * as constants from './constants';

export const ajustaSaldo = saldo => ({
  type: constants.AJUSTA_SALDO,
  saldo
});

export const depositar = deposito => ({
  type: constants.DEPOSITAR,
  deposito
});

export const sacar = saque => ({
  type: constants.SACAR,
  saque
});
