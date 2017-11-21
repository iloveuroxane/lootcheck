import saldoReducer from './balance';
import saldoReducer2 from './balance';
import * as constants from '../actions/constants';

describe('saldoReducer', () => {
  describe('quando inicializando', () => {
    const saldo = 10;

    it('ajusta o saldo', () => {
      expect(saldoReducer(undefined, { type: constants.AJUSTA_SALDO, saldo }))
        .toEqual(saldo);
    });

    describe('então re-inicializa', () => {
      it('lê o saldo dos cookies', () => {
        expect(saldoReducer2(undefined, {})).toEqual(saldo);
      });
    });
  });

  it('deposita no saldo da conta', () => {
    const deposito = 10;
    const saldoInicial = 5;

    expect(saldoReducer(saldoInicial, { type: constants.DEPOSITAR, deposito }))
      .toEqual(saldoInicial + deposito);
  });

  it('saca do saldo da conta', () => {
    const saque = 20;
    const saldoInicial = 30;

    expect(saldoReducer(saldoInicial, { type: constants.SACAR, saque }))
      .toEqual(saldoInicial - saque);
  });
});
