import test from 'ava';
import superheroes from '.';

test('main', t => {
	t.true(superheroes.all.length > 0);
	t.true(superheroes.all.includes('Superman'));
	t.truthy(superheroes.random());
});
