import getCurrentCoins from '../services/requestCurrrentCoinAPI';

export const USER_TYPE = 'USER_TYPE';
export const WALLET_TYPE = 'WALLET_TYPE';

export const LOADING_TYPE = 'LOADING_TYPE';
export const SUCCES_TYPE = 'SUCCES_TYPE';
export const ERROR_TYPE = 'ERROR_TYPE';

export const userAction = (state) => ({ type: USER_TYPE, payload: state });
export const walletAction = (state) => ({ type: WALLET_TYPE, payload: state });

export const loadingAction = () => ({ type: LOADING_TYPE });
export const succesApiAction = (state) => ({ type: SUCCES_TYPE, payload: state });
export const errorApiAction = (error) => ({ type: ERROR_TYPE, payload: error });

export const fetchApiWithThunk = () => (dispatch) => {
  dispatch(loadingAction);

  return getCurrentCoins()
    .then((response) => dispatch(succesApiAction(response)),
      () => dispatch(errorApiAction));
};
