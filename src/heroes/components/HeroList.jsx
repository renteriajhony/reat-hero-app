import React, { useMemo } from 'react';
import { PropTypes } from 'prop-types';
import { getHeroesByPublisher, HeroCard } from './../../heroes';

export const HeroList = ({ publisher }) => {
  const heros = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className='row rows-col-1 row-cols-md-3 g-3'>
      {heros.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired,
};
