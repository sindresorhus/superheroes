import uniqueRandomArray from 'unique-random-array';
import superheroes from './superheroes.json' with {type: 'json'};

export default superheroes;

export const randomSuperhero = uniqueRandomArray(superheroes);
