import { render, screen } from '@testing-library/react';
import { PrivateRoute } from '../../src/router';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Test <PrivateRoute/>', () => {
  beforeEach(() => {});
  beforeAll(() => {});
  afterAll(() => {});

  test('should navigate to /marvel if is authenticated ', () => {
    const initialState = { logged: true, user: { name: 'jhony', id: '123' } };
    render(
      <AuthContext.Provider value={initialState}>
        <MemoryRouter initialEntries={['/marvel']}>
          <Routes>
            <Route
              path='marvel'
              element={
                <PrivateRoute>
                  <h1>Ruta Privada</h1>
                </PrivateRoute>
              }
            />
            <Route path='login' element={<h1>Pagina login</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText('Ruta Privada')).toBeTruthy();
  });

  test('should render children if is authenticated', () => {
    Storage.prototype.setItem = jest.fn();

    const initialState = { logged: true, user: { name: 'jhony', id: '123' } };
    render(
      <AuthContext.Provider value={initialState}>
        <MemoryRouter initialEntries={['/marvel']}>
          <PrivateRoute>
            <h1>Ruta Privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText('Ruta Privada')).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/marvel');
  });
});
