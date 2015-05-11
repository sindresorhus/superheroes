# superheroes [![Build Status](https://travis-ci.org/sindresorhus/superheroes.svg?branch=master)](https://travis-ci.org/sindresorhus/superheroes)

> Get superhero names

![](https://cloud.githubusercontent.com/assets/170270/7563453/ad57a684-f7dd-11e4-8302-081f132e8653.png)

The list is just a [JSON file](superheroes.json) and can be used wherever.


## Install

```
$ npm install --save superheroes
```


## Usage

```js
var superheroes = require('superheroes');

superheroes.random();
//=> 'Spider-Ham'
```


## API

### .all

Type: `array`

Superhero names in alphabetical order.

### .random()

Type: `function`

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
- [superb](https://github.com/sindresorhus/superb) - Get superb like words


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
