# Wits File Parser
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## Description
[xlsx]: https://github.com/SheetJS/js-xlsx
The official vibely node api client

## Installation

Add this as a dependency to your project using [yarn] with

```
$ yarn add @vibely/api-client-node
```

[yarn]: https://yarnpkg.com/

## Usage

This package exposes an api for getting events intended to be use like.

```js
var api = require('@vibely/api-client-node').default({})

var events = api.getEvent(`token`)

console.log('events', events)

```

## Development Quickstart

```
$ git clone https://github.com/vibely/api-client-node.git
$ cd api-client-node
$ nvm install
$ yarn
```

## Development and Testing

### Source Code

The [api-client-node source] is hosted on GitHub.
Clone the project with

```
$ git clone https://github.com/vibely/api-client-node.git
```

[api-client-node source]:https://github.com/vibely/api-client-node

### Requirements

You will need [Node.js] with [yarn].


Be sure that all commands run under the correct Node version, e.g.,
if using [nvm], install the correct version with

```
$ nvm install
```

and set the active version for each shell session with

```
$ nvm use
```

Install the development dependencies with

```
$ yarn
```

[Node.js]: https://nodejs.org/
[nvm]: https://github.com/creationix/nvm

### Tasks

Primary development tasks are defined under `scripts` in `package.json`
and available via `yarn run`.
View them with

```
$ yarn run
```

#### Production Build

Lint, test, and transpile the production build to `dist` with

```
$ yarn run dist
```

##### Publishing a new release

Release a new version using [`npm version`][npm version].
This will run all tests, update the version number,
create and push a tagged commit.

[npm version]: https://docs.npmjs.com/cli/version

#### Linting

Linting against the [JavaScript Standard Style] and [JSON Lint]
is handled by [gulp].


Automatically fix most JavaScript formatting errors with

```
$ yarn run format
```

[gulp]: http://gulpjs.com/
[JavaScript Standard Style]: http://standardjs.com/
[JSON Lint]: https://github.com/zaach/jsonlint

#### Tests

Unit testing is handled by [AVA] and coverage is reported by [Istanbul].
Watch and run tests on change with

```
$ yarn run test
```

Generate a coverage report with

```
$ yarn run report
```

An HTML version will be saved in `coverage`.

[AVA]: https://github.com/avajs/ava
[Istanbul]: https://istanbul.js.org/

## License

This npm package is Copyright (c) 2016-2017 Vibely Inc.

## Warranty

This software is provided by the copyright holders and contributors "as is" and
any express or implied warranties, including, but not limited to, the implied
warranties of merchantability and fitness for a particular purpose are
disclaimed. In no event shall the copyright holder or contributors be liable for
any direct, indirect, incidental, special, exemplary, or consequential damages
(including, but not limited to, procurement of substitute goods or services;
loss of use, data, or profits; or business interruption) however caused and on
any theory of liability, whether in contract, strict liability, or tort
(including negligence or otherwise) arising in any way out of the use of this
software, even if advised of the possibility of such damage.
