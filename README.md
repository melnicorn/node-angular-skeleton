# Node / Angular Skeleton
This is a very simple starting point that I use for the base of my Node JS servers which serve up an Angular app.  This project layout is something that I've found to be quite useful and a great way to keep my various projects structured similarly.

To get started:
```
git clone https://github.com/melnicorn/node-angular-skeleton

cd node-angular-skeleton

npm install

node index.js
```
Browse to ```http://localhost:5000/app``` to see the app in action!

## Making it yours
Provided in this skeleton is a fully functional (but super simple) Node JS express server and an Angular app. Things you'll want to do right away to make it yours.


* ```./package.json```: Update to reflect the meta-data relevant to your project
* ```./index.js```: Add any additional functionality your server might need
* ```./routes/```: This is the base directory which contains all the express routing scripts and content to be served up by your server
  * ```./routes/api.js```: This skeleton provides an API for your Angular app to call to make requests to the server. This is where you define how requests to the API get routed to your server-side Javascript functions.
  * ```./routes/api/```: This is the base directory for all of the server-side API scripts. I like to map one script to each REST method to keep things tidy
    * ```./routes/api/template.js```: A simple script with an example of a GET and POST handler
  * ```./routes/public/```: This is the base directory for all the static content to get delivered to the client. Examples include html files, css, client-side javascript, and images.
    * ```./routes/public/app/```: This is where all the Angular app files go. Even though the app file itself is Javascript, I like to put it next to the html rather than in a scripts directory.
    * ```./routes/public/css/```: CSS goes here
    * ```./routes/public/img/```: Images go here
    * ```./routes/public/js/```: Other client-side Javascript files go here (any Javascript not part of your Angular app)
      * ```./routes/public/js/lib/```: 3rd party Javascript libraries (e.g. Angular framework)