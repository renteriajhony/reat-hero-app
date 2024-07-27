import { fireEvent, render, screen } from '@testing-library/react';
import { Navbar } from '../../../src/ui';
import { AuthContext } from '../../../src/auth';
import { MemoryRouter } from 'react-router-dom';

const mockUseNavegate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavegate,
}));

describe('Test <Navbar>', () => {

  const initialState = {
    logged: false,
    user: { id: 'abc', name: 'Jhony' },
    logouth: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());
  beforeAll(() => {});
  afterAll(() => {});

  test('should show user name if logged is true', () => {

    render(
      <AuthContext.Provider value={initialState}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText('Jhony')).toBeTruthy();
  });

  test('should call logouth and navigate when have logout', () => {

    render(
      <AuthContext.Provider value={initialState}>
        <MemoryRouter initialEntries={['/marvel']}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const btn = screen.getByRole('button');
    fireEvent.click(btn);

    expect(initialState.logouth).toHaveBeenCalled();
    expect(mockUseNavegate).toHaveBeenCalledWith('login', { replace: true });
  });
});
