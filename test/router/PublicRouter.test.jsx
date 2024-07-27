import { render, screen } from '@testing-library/react';
import { PublicRoute } from '../../src/router';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Test <PublicRoute/>', () => {
  beforeEach(() => {});
  beforeAll(() => {});
  afterAll(() => {});

  test('should render', () => {
    const initialState = { logged: false, user: {} };
    render(
      <AuthContext.Provider value={initialState}>
        <MemoryRouter initialEntries={['/login']}>
          <PublicRoute>
            <h1>Ruta Publica</h1>
          </PublicRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText('Ruta Publica')).toBeTruthy();
  });

  test('should navigate to /marvel if is authenticated ', () => {
    const initialState = { logged: true, user: { name: 'jhony', id: '123' } };
    render(
      <AuthContext.Provider value={initialState}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route
              path='login'
              element={
                <PublicRoute>
                  <h1>Ruta Publica</h1>
                </PublicRoute>
              }
            />
            <Route path='marvel' element={<h1>Pagina marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText('Pagina marvel')).toBeTruthy();
  });
});
