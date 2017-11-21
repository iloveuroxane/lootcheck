import * as constants from './constants';
import * as actions from './balance';

it('cria uma action para ajustar o saldo', () => {
  const saldo = 0;
  const actionEsperada = { type: constants.AJUSTA_SALDO, saldo };

  expect(actions.ajustaSaldo(saldo)).toEqual(actionEsperada);
});

it('cria uma action para depositar na carteira', () => {
  const deposito = 10;
  const actionEsperada = { type: constants.DEPOSITAR, deposito };

  expect(actions.depositar(deposito)).toEqual(actionEsperada);
});

it('cria uma action para sacar da carteira', () => {
  const saque = 20;
  const actionEsperada = { type: constants.SACAR, saque };

  expect(actions.sacar(saque)).toEqual(actionEsperada);
});
