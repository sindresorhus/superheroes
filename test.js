import test from 'ava';
import superheroes, {randomSuperhero} from './index.js';

test('main', t => {
	t.true(superheroes.length > 0);
	t.true(superheroes.includes('Superman'));
	t.truthy(randomSuperhero());
});
