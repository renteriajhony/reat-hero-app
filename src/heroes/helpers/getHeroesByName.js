import { heroes } from '../data';

export const getHeroesByName = (name = '') => {
  if (name.length === 0) return [];

  name = name.toLowerCase().trim();

  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
