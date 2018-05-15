# Craft 3 and Foundation 6 Starter Kit

Includes Sass and JS compiler.

## Installation (into a new project)

After forking the repository, navigate to your project folder:

`$ cd PROJECT_FOLDER`

And run the following commands:

`$ npm install`
`$ bower install`
`$ composer install`

Then follow the setup instructions [here](https://docs.craftcms.com/v3/installation.html) or do the following: 

- create a local database
- point MAMP (or whatever your local server is) to PROJECT_FOLDER/web
- run `$ ./craft setup/security-key` to generate a key for your install
- run `$ ./craft setup` and enter your project details when prompted

## Node and Bower plugins

To add plugins with npm or bower, simply install and add the relevant paths to gulpfile.js. For JS, add the path to the javascript task. For SCSS or CSS, add the path to the sassPaths variable and then do an `@import` in web/assets/scss/app.scss. You can also remove 'bower_components/foundation-sites/dist/js/foundation.min.js' and add only the foundation components you require to reduce load time.

## Start developing

To compile SASS and CSS, just run `$ gulp watch` and make changes to web/assets/js/src/app.js and web/assets/scss/app.scss.