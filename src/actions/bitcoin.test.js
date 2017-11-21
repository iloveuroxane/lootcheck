// https://api.coindesk.com/v1/bpi/currentprice/BRL.json
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { ACESSA_API_BITCOIN } from './constants';
import { acessaAPIBitcoin } from './bitcoin';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ bitcoin: {} });

const mockResponse = { body: { bpi: 'index do preço bitcoin' } };
