import { ACESSA_API_BITCOIN } from '../actions/constants';

const bitcoin = (state = {}, action) => {
  const reducers = {
    [ACESSA_API_BITCOIN]: () => action.bitcoin,
    DEFAULT: () => state
  };

  return (reducers[action.type] || reducers.DEFAULT)();
};

export default bitcoin;