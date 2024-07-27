import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroesById } from '../helpers/getHeroesById';
import { ROUTE_MARVEL_PAGE } from '../../router';

export const HeroPage = () => {
  const { id } = useParams();
  const navegate = useNavigate();
  const hero = useMemo(() => getHeroesById(id), [id]);

  const onNavigateBack = () => {
    navegate(-1);
  };

  if (!hero) {
    return <Navigate to={`/${ROUTE_MARVEL_PAGE}`} />;
  }
  return (
    <div className='row mt5 animate__animated animate__fadeIn'>
      <div className='col-4 animate__animated animate__backInLeft'>
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className='img-thumbnail'
        />
      </div>
      <div className='col-8 animate__animated animate__backInRight'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className='list-group-item'>
            <b>Firsh appearance:</b> {hero.first_appearance}
          </li>
        </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>
        <button className='btn btn-outline-info' onClick={onNavigateBack}>
          Return
        </button>
      </div>
    </div>
  );
};
