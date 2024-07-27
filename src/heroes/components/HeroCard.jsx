import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import { ROUTE_HERO_PAGE } from './../../router';

export const CharactersByHero = ({ alter_ego, characters }) =>
  alter_ego === characters ? <></> : <p>{characters}</p>;

export const HeroCard = ({
  id,
  superhero,
  // publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrls = `./../../../assets/heroes/${id}.jpg`;

  return (
    <div className='col animate__animated animate__fadeIn'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img src={heroImageUrls} alt={superhero} className='card-img' />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>{superhero}</h5>
              <p className='card-text'>{alter_ego}</p>
              <CharactersByHero alter_ego={alter_ego} characters={characters} />
              <p className='card-text'>
                <small className='text-muted'>{first_appearance}</small>
              </p>
              <Link to={`/${ROUTE_HERO_PAGE}/${id}`}> Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  alter_ego: PropTypes.string,
  first_appearance: PropTypes.string,
  characters: PropTypes.string,
};
