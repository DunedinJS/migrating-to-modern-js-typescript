# Migrating to modern JS &mdash; TypeScript

__This is a TypeScript fork of https://github.com/DunedinJS/migrating-to-modern-js__

A simple stopwatch application which serves as an example of how to migrate an old JavaScript application to modern syntax, features, and technologies.

## What do I need?

* Git

* Git Bash &mdash; if using Windows (included with Git)

* Node.js version 6.9

  _Everything probably works with version 4 or higher but has not been checked._
  Run `node -v` to check your current version.
  [Follow the instructions here to install Node.js](https://github.com/DunedinJS/dunedin-modern-javascript/blob/master/topics/common/nodejs-install.md)

* A text editor with first-class JavaScript and TypeScript support.

  __[VSCode](https://code.visualstudio.com/) strongly recommended because it is
  ready to go and has the best support for TypeScript.__

* A modern web browser with good debugging tools such as Chrome, Firefox, or Edge.

## Let's begin

1. Clone this repository by running
`git clone https://github.com/DunedinJS/migrating-to-modern-js-typescript.git`

1. `cd ./migrating-to-modern-js-typescript`

  _If using NVM to manage Node.js versions you can also run `nvm use` here to
  make sure that the correct version is active._

1. Checkout the `00-original` branch by running `git checkout 00-original`

1. Make sure to view the readme file for each branch.
These contain any further setup instructions and information about each stage.

1. Explore the code.

  Make changes if you'd like. To discard changes before checking out another
  branch run `git reset --hard HEAD`.

1. Checkout the next branch and continue.

### Each stage is stored in a different branch

#### [`00-original`](https://github.com/DunedinJS/migrating-to-modern-js-typescript/tree/00-original)

Our starting application. Built on Backbone.js and state of the art from late 2010 to around 2013.

#### [`01-packages`](https://github.com/DunedinJS/migrating-to-modern-js-typescript/tree/01-packages)

* Add NPM for package management
* Remove third-party libraries from repository

#### [`02-typescript`](https://github.com/DunedinJS/migrating-to-modern-js-typescript/tree/02-typescript)

* Add Webpack and TypeScript to compile and bundle modular source code into a single browser-ready script
* Import third-party libraries as modules

#### [`03-typescript`](https://github.com/DunedinJS/migrating-to-modern-js-typescript/tree/03-typescript)

* Add type definitions for third-party libraries
* Use TypeScript features in source file

#### [`04-modules`](https://github.com/DunedinJS/migrating-to-modern-js-typescript/tree/04-modules)

* Separate all source code into TypeScript modules
