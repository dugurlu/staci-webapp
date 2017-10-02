# Quickstart Guide
This is a quickstart introduction to the project structure and the most basic usage.
For advanced topics regarding extension, testing or deployment see the [Advanced Guide](Advanced.md).

## Preparation
The webapp requires `node` and `npm` to fetch dependencies and for execution.
Follow below instructions for setup.

### Linux
For Debian based distributions, install from repositories via apt-get:

node: `sudo apt-get install nodejs-legacy`

npm: `sudo apt-get install npm`

### Windows
For Windows download the installer from [nodejs.org](https://nodejs.org/) and follow the instructions.

## Configuration
The webapp uses `dotenv` to provide configuration via environment variables.
These environment variables are read from the `.env` file and injected into javascript at `process.env.<VARIABLE>`

In order to setup your own configuration (the .env file is not checked into the repository as it might contain sensitive API keys):
- Make a copy of the `.env.example` file and name it `.env`

The .env.example file contains all variable names that are required for configuration.
Some of the values are empty and have to be provided - see the following sections.

###  Logging with Sentry
Sentry is a modern error logging and aggregation platform.
In order to use it during development you need to configure it with an `API key` as well as an application `ID`.

- First, create an account at [Sentry](https://sentry.io)
- Add a `new project` and select `React` as framework language
- Sentry's `Configuring the Client` section will show you a line that looks like this: `Raven.config('https://<API_KEY>@sentry.io/<APP_ID>').install()`
- Take note of both, <API_KEY> and <APP_ID>
- Paste the <API_KEY> into the SENTRY_KEY and the <APP_ID> into SENTRY_APP of the .env file

The app is now configured to log (and notify you about) errors that occur in the webapp.

### Before starting the app
Before starting a local webserver with the application you need to fetch all required dependencies:

- go to `/staci-webapp`
- use `npm install` to let npm fetch all required dependencies

To start the application see section [npm start](#npm-start).

## Other scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:7770](http://localhost:7770) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner.<br>
See the section about [running tests](Advanced.md#running-tests) for more information.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](Advanced.md#deployment) for more information.

---
# logic

## pages

the following link directs you to a [page overview](pages.md)

## debug

- `Redux dev tools:` Shows the state of the app

- `React dev tools:` Shows the js which is being used

---
## Table of Contents

- [Quickstart Guide](#quickstart-guide)
- [Folder Structure](#folder-structure)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)

- [Syntax Highlighting in the Editor](#syntax-highlighting-in-the-editor)

## Folder Structure

After creation (and `npm install`), your project should look like this:

```
my-app/
  node_modules/
  client/
  test/
  README.md
  package.json
  index.html
  devServer.js
  .env.example
  .babelrc
  .eslintrc
  .gitignore
  styleguide.config.js
  webpack.config.dev.js
  webpack.config.prod.js
```

For the project to build, **these files must exist with exact filenames**:

* `index.html` is the page template;
* `client/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `client`. For faster rebuilds, only files inside `client` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `client`**, otherwise Webpack won’t see them.

You can, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Syntax Highlighting in the Editor

To configure the syntax highlighting in your favorite text editor, head to the [relevant Babel documentation page](https://babeljs.io/docs/editors) and follow the instructions. Some of the most popular editors are covered.
