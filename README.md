_[Back to `master` branch](https://github.com/DunedinJS/migrating-to-modern-js-typescript)_

# 02-typescript

* Add Webpack and TypeScript to compile and bundle modular source code into a
single browser-ready script

  There is now only a single `<script>` tag to load the application bundle in
  [`index.html`](./index.html).

* Convert `app.js` to TypeScript as [`app.ts`](./app.ts)

* Import third-party libraries as modules

  The application no longer relies on global variables because Webpack makes
  sure that all module dependencies are satisfied.

## To run

1. Clone this repository to your workstation
1. Checkout the `02-typescript` branch
1. Run `npm i` in the project directory &mdash; this installs dependencies

#### Development server

This runs the Webpack Dev Server which automatically recompiles when source files change.

1. Run `npm start`
1. Open `http://localhost:8080/` in a web browser

#### Build to files

This compiles and bundles the JavaScript source files into `dist/bundle.js`

1. Run `npm run build`
1. Open the `index.html` file directly in a web browser

## Webpack

[Webpack](https://webpack.github.io/docs/) is a module bundler for web projects.
It can bundle multiple source files of different types including JavaScript, HTML,
images, and CSS among others and bundle them into browser-ready files.

Webpack is highly configurable via vast ecosystem of loaders and plugins.

## TypeScript

[TypeScript](http://www.typescriptlang.org/) is a language which is considered as
a superset of JavaScript. Most importantly it has parity with modern and future
JavaScript syntax and add strong typing.
The typed features can help when working on large-scale projects because possible
errors can be caught during compilation.

TypeScript is compiled into JavaScript code which has full browser support.

_In this branch we only use TypeScript for its module import syntax but not its
full typed features.
The existing JavaScript in [`app.ts`](./app.ts) remains unchanged._
