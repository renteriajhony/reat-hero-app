import { authReducer } from '../../../src/auth/context/authReducer';
import { types } from './../../../src/auth/types/types';

describe('Test authReducer', () => {
  test('return state for default', () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test('set user and login to true', () => {
    const action = {
      type: types.login,
      payload: {
        id: 'abc',
        name: 'Jhony',
      },
    };

    const state = authReducer({}, action);
    expect(state.logged).toEqual(true);
  });
  test('remove user and logouth', () => {
    const initialState = { logged: true, user: { id: 'abc', name: 'Jhony' } };

    const action = {
      type: types.logouth,
    };

    const state = authReducer(initialState, action);
    expect(state.logged).toEqual(false);
  });
});
