import { render, screen } from '@testing-library/react';
import { AppRouter } from '../../src/router/AppRouter';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { MemoryRouter } from 'react-router-dom';

describe('Test <AppRouter/>', () => {
  beforeEach(() => {});
  beforeAll(() => {});
  afterAll(() => {});

  test('should show login if logged is false', () => {
    const initialState = { logged: false, user: { name: 'jhony', id: '123' } };
    render(
      <AuthContext.Provider value={initialState}>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    // screen.debug();
    expect(screen.getAllByText('Login').length).toBe(2);
  });
  test('should show Marvel if logged is true', () => {
    const initialState = { logged: true, user: { name: 'jhony', id: '123' } };
    render(
      <AuthContext.Provider value={initialState}>
        <MemoryRouter initialEntries={['/login']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    // screen.debug();
    expect(screen.getAllByText('Marvel Page').length).toBeGreaterThanOrEqual(1);
  });
});
