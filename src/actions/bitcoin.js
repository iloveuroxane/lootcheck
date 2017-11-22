import { ACESSA_API_BITCOIN } from './constants';

export const acessaAPIBitcoin = () =>
  dispatch =>
    fetch('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
      .then(res => res.json())
      .then(json => dispatch({ type: ACESSA_API_BITCOIN, bitcoin: json }));