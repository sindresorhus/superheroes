/**
Superhero names in alphabetical order.

@example
```
import superheroes from 'superheroes';

superheroes;
//=> ['3-D Man', 'A-Bomb', …]
```
*/
declare const superheroes: readonly string[];

export default superheroes;

/**
Get a random superhero name.

@example
```
import {randomSuperhero} from 'superheroes';

randomSuperhero();
//=> 'Spider-Ham'
```
*/
export function randomSuperhero(): string;
