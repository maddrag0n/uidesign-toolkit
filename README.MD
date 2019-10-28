# UIDTK

A growing collection of tools for UI Designers.

## License

BSD 3-Clause

## Installation

1. Install node
2. Install nvm or nodenv
3. Use / install node version in `./.nvmrc`
4. Install [yarn](https://yarnpkg.com)
5. `$ chmod +x ./uidtk`
6. `$ yarn start --help`


## CLI Usage

### Binary (Linux/macOS only)

```sh
$ ./uidtk --help
```

or when installed as a package:

```sh
$ ./node-modules/.bin/uidtk --help
```

### Using yarn

```sh
$ yarn uidtk --help
```

## ES6 Module / UMD Module

```js
// ES 6
import * as uidtk from 'uidesign-toolkit/lib/uidtk.es5';

// UMD
const uidtk = require('uidesign-toolkit/lib/uidtk.es5');
```
