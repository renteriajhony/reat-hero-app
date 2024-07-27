import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroesByName } from '../helpers';
import { HeroCard } from '../components';

export const SearchPAge = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = q == '';
  const showError = !showSearch && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type='text'
              placeholder='Find your hero'
              className='form-control'
              name='searchText'
              id='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />
            <button type='submit' className='btn btn-outline-primary mt-1'>
              Search
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />

          {/* {q == '' ? (
            <div className='alert alert-primary'> Search hero </div>
          ) : (
            heroes.length === 0 && (
              <div className='alert alert-danger'>
                {' '}
                There’s no result for: <b>{q}</b>{' '}
              </div>
            )
          )} */}

          <div
            className='alert alert-primary animate__animated animate__fadeIn'
            style={{ display: showSearch ? 'block' : 'none' }}
          >
            Search hero
          </div>
          <div
            className='alert alert-danger animate__animated animate__fadeIn'
            style={{
              display: showError ? 'block' : 'none',
            }}
          >
            There’s no result for: <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} className='mt-1' />
          ))}
        </div>
      </div>
    </>
  );
};
