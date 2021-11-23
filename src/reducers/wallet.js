import { ERROR_TYPE, LOADING_TYPE, SUCCES_TYPE, WALLET_TYPE } from '../actions';

const INITIAL_STATE = {
  expenses: [],
  isLoading: false,
  currencies: [],
  error: '',
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET_TYPE:
    return ({
      ...state,
      expenses: action.payload,
    });
  case LOADING_TYPE:
    return {
      ...state,
      isLoading: true,
    };
  case SUCCES_TYPE:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((coins) => coins !== 'USDT'),
      exchangeRates: action.payload,
      isLoading: false,
    };
  case ERROR_TYPE:
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    };
  default:
    return state;
  }
}

export default walletReducer;
