import { fireEvent, render, screen } from '@testing-library/react';
import { SearchPage } from '../../../src/heroes';
import { MemoryRouter } from 'react-router-dom';


const mockUseNavegate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavegate,
}));
describe('Test <SearchPage/>', () => {
  beforeEach(() => jest.clearAllMocks());
  beforeAll(() => {});
  afterAll(() => {});

  test('should render with values for defaulth', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );
    // screen.debug();
    expect(container).toMatchSnapshot();
    expect(screen.getByText('Searching'));
  });
  test('Should show batman and the input with the parameter value', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=bat']}>
        <SearchPage />
      </MemoryRouter>
    );
    // screen.debug();
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('bat');
    const img = screen.getByRole('img');
    expect(img.src).toContain('assets/heroes/dc-batman.jpg');

    const divAlertSearch = screen.getByLabelText('divAlertSearch');
    expect(divAlertSearch.style.display).toBe('none');
  });

  test('should show error when not finding the hero', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batara']}>
        <SearchPage />
      </MemoryRouter>
    );
    // screen.debug();

    const divAlertDanger = screen.getByLabelText('divAlertDanger');
    expect(divAlertDanger.style.display).toBe('block');
  });
  test('should call the navigator to the new screen', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );
    // screen.debug();

    const input = screen.getByRole('textbox');
    fireEvent.change(input, {
      target: { name: 'searchText', value: 'batman' },
    });
    const form = screen.getByLabelText('formSearch');
    fireEvent.submit(form);

    expect(mockUseNavegate).toHaveBeenCalledWith('?q=batman');
  });
});
