_[Back to `master` branch](https://github.com/DunedinJS/migrating-to-modern-js-typescript)_

# 03-typescript

* Add type definitions for third-party libraries

  See packages with the `@types` scope in the `dependencies` section of
  [`package.json`](./package.json).

* Use TypeScript features in [`app.ts`](./app.ts)

## To run

1. Clone this repository to your workstation
1. Checkout the `03-typescript` branch
1. Run `npm i` in the project directory &mdash; this installs dependencies

#### Development server

This runs the Webpack Dev Server which automatically recompiles when source files change.

1. Run `npm start`
1. Open `http://localhost:8080/` in a web browser

#### Build to files

This compiles and bundles the JavaScript source files into `dist/bundle.js`

1. Run `npm run build`
1. Open the `index.html` file directly in a web browser

## Learning TypeScript

The best place to gain an understanding of the basics of TypeScript is the
official [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html).

## Type declarations

While it is possible to directly import plain JavaScript modules into TypeScript
we lack any type information.
For example, what argument type does the `_.template` function expect and what
type does it return.
As developers who are familiar with the Underscore.js library we know that
`_.template` takes a string and returns a function but because there is not
formal type declaration, TypeScript is not able to provide any further assistance.

When working with TypeScript it is much more useful to have type information
because it allows better error checking and editor hints.

```typescript
// with type declarations for Underscore.js
var fn = _.template('some string'); // fine because a string is given
var x = fn + 1; // error -- fn is known to be a function and it doesn't make sense to add
fn(); // fine because fn is known to be a function

var fn2 = _.template([]); // error -- a string is expected to be given -- not an array
```

Type declarations for third-party libraries are published as NPM packages in the
`@types` scope.
For example [`@types/underscore`](https://www.npmjs.com/package/@types/underscore)
which provides type declaration for Underscore.js.

It is also possible to write your own type declaration files.
These are helpful if parts of your source code are written in plain JavaScript.
