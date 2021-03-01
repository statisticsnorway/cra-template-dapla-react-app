# cra-template-dapla-react-app

This little template can be used as a cra-template when creating new React Applications. Basing a new project on a 
cra-template can be quite powerful and lets you skip the boring part of a new project setup. Following the official 
documentation on [templates for React](https://create-react-app.dev/docs/custom-templates), this template offers a 
good start for any React application built for Statistics Norway Dataplatform (Dapla).

## How to set it up
### Locally
1. Clone this repository
2. Create your new React application by running 
`yarn create react-app [app-name] --template file:[path-to-this-repository]`

For example, if you want to start a new project called `new-dapla-app`, and you cloned this repository to 
`/Users/me/Projects/react-templates/cra-template-dapla-react-app`, the command would be
`yarn create react-app new-dapla-app --template file:/Users/me/Projects/react-templates/cra-template-dapla-react-app`.

### From npm
_Coming soon!_

#### Things to remember
Even though this type of setup for a new project skips a lot of configuration and setup there are still some small 
things you have to change and/or add in your new project. 

First of all, some important properties are still missing from the `package.json`-file in your newly created project, 
and should be added:
* A `description`
* Link to the repository through `repository`
* An `author`
* A `license` where you specify the one from the `licenses` array

These are all included in the `template.json` file found in this repository but cra-templates for React is not quite
at the level of copying every property from the template yet.

Secondly, some things needs to be changed:
* In `azure-pipelines.yml` change the variable value for `appName` to your applications name
* In `public/index.html` change:
    * `content` in `<meta name="description" />`
    * `<title>`
* In `public/manifest.json` change `short_name` and `name`

Lastly:
* Change `REACT_APP_API` in the `.env`-file
* Change `UI.HEADER` in `src/enums/UI.js`

Phew! Now you should be good to go!

Another thing you might want to consider is moving the `@testing-library` libraries and the `@beam-australia/react-env` 
library from `dependencies` to `devDependencies` in your new project (in the `package.json` file). The template should 
have done this for you but at the moment cra-templates does not support declaring `devDependencies` in a template.

## Under the hood
So, what does this template actually give you? 
* It pre-installs some dependencies, mainly:
    * [react-env](https://github.com/andrewmclagan/react-env), enabling setting environment variables with `docker run`
    * axios through [axios-hooks](https://github.com/simoneb/axios-hooks)
    * SemanticUI with its [React integration](https://react.semantic-ui.com)
    * [dapla-js-utilities](https://github.com/statisticsnorway/dapla-js-utilities)
    * [React](https://create-react-app.dev/docs/getting-started)
* Sets up CI for React applications with Azure Piplines on BIP
    * Configures a Dockerfile
    * Configures serving the application with NGINX
    * Configures SonarQube test coverage reporting
* Sets up a skeleton application with:
    * Context capabilities for language choice across the application and a backend api to talk to
    * A top menu with the Statistics Norway logo, language choice and settings menu (for changing backend url in-app)
