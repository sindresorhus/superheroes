import test from 'ava';
import x from './';

test(t => {
	t.true(x.all.length > 0);
	t.true(x.all.indexOf('Superman') !== -1);
	t.truthy(x.random());
});
