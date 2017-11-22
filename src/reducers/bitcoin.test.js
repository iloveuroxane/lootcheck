import { ACESSA_API_BITCOIN } from '../actions/constants';
import bitcoinReducer from './bitcoin';

describe('bitcoinReducer', () => {
  const dadosBitcoin = { bpi: 'index do preço bitcoin' };

  it('busca e ajusta os dados do bitcoin', () => {
    expect(bitcoinReducer({}, { type: ACESSA_API_BITCOIN, bitcoin: dadosBitcoin }))
      .toEqual(dadosBitcoin);
  });
});
