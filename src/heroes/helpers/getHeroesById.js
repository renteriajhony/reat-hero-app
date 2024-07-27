import { heroes } from '../data';

export const getHeroesById = (id) => {
  return heroes.find((hero) => hero.id === id);
};
