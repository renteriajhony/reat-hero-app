import { types } from '../../../src/auth/types/types';

describe('Test "Types.js"', () => {
  test('return this types', () => {
    expect(types).toEqual({ login: 'login', logouth: 'logouth', });
  });
});
