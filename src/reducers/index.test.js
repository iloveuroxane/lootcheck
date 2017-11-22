import rootReducer from './index';

describe('rootReducer', () => {
  it('inicializa com os estados padrões', () => {
    expect(rootReducer({}, {})).toEqual({ saldo: 0, bitcoin: {} });
  });
});
