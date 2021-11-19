import { USER_TYPE } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_TYPE:
    return ({
      ...state,
      email: action.payload,
    });
  default:
    return state;
  }
}

export default userReducer;
