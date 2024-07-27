import { types } from '../types/types';


export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };
    case types.logouth:
      return {
        ...state,
        logged: false,
      }
    default:
      return state;
  }
};
