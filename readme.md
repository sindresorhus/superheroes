# superheroes [![Build Status](https://travis-ci.org/sindresorhus/superheroes.svg?branch=master)](https://travis-ci.org/sindresorhus/superheroes)

> Get superhero names

![](https://cloud.githubusercontent.com/assets/170270/7563453/ad57a684-f7dd-11e4-8302-081f132e8653.png)

The list is just a [JSON file](superheroes.json) and can be used anywhere.


## Install

```
$ npm install superheroes
```


## Usage

```js
const superheroes = require('superheroes');

superheroes.random();
//=> 'Spider-Ham'
```


## API

### .all

Type: `Array`

Superhero names in alphabetical order.

### .random()

Type: `Function`

Random superhero name.


## CLI

```
$ npm install --global superheroes
```

```
$ superheroes --help

  Examples
    $ superheroes
    Spider-Ham

    $ superheroes --all
    3-D Man
    A-Bomb
    ...

  Options
    --all   Get all names instead of a random name
```


## Related

- [supervillains](https://github.com/sindresorhus/supervillains) - Get supervillain names
- [cat-names](https://github.com/sindresorhus/cat-names) - Get popular cat names
- [dog-names](https://github.com/sindresorhus/dog-names) - Get popular dog names
- [pokemon](https://github.com/sindresorhus/pokemon) - Get Pokémon names
- [superb](https://github.com/sindresorhus/superb) - Get superb like words
- [yes-no-words](https://github.com/sindresorhus/yes-no-words) - Get yes/no like words


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
