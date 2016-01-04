#NodePress

A simple CMS made with the MEAN stack, MaterializeCSS and Bootstrap (soon to remove Bootstrap and
 only use MaterializeCSS)

##Development notes

NodePress is still under construction, but this instance should work out of the box in a 
development environment by following the steps below.

Plugins have been introduced for Sidebar Items and will be introduced for several other areas of 
NodePress within time as the feature is solidified. The intent is for developers to create and modify
 plugins to their own desire (like WordPress).
 
The Plugins directory is located in the np-site folder and mainly uses AngularJS directives to 
provide functionality. Plugins do not use Webpack or a module loader so they can be dropped in 
and work out of the box without having to bundle new javascript. Be sure to keep plugin 
javascript contained within an IIFE to protect the global namespace.

##Steps to configure

1. Make sure to have [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.org/) installed and running on your 
machine
2. npm install and bower install dependencies
3. Open the np-config.js file located at root level and update the db.uri (for Mongoose) and port 
(for Express) manually as needed
4. Run ```node np-server.js``` or ```nodemon np-server.js``` if you have nodemon installed globally
5. Goto localhost:3006/np-admin in your web browser (or whatever port you chose in the np-config
.js file)
6. Set up a new user, then log in.

##Instructions for use

Create pages, categories, menus, select menu locations, create sidebars (under development still) 
custom home page and select 1 of 2 starting themes.

To create themes, copy either the default or awesome-theme from np-site/themes into the same 
folder, rename and edit CSS or HTML.

To view front end website, go to root localhost url (localhost:3006/) or whatever the domain root
 is.

##Miscellaneous development notes

NodePress uses Webpack as a clientside module loader.

NodePress uses Gulp for bundling javascript and compiling LESS:

* gulp watch:bundleAdmin (to watch and bundle admin javascript for developers only)
* gulp watch:adminCSS (to watch and compile admin LESS files)
* gulp watch:bundleSite (to watch and bundle site javascript for developers only)

Plenty of new features are being added, but everything is still in a development stage. I 
will keep the README up to date with everything new, or any changes.

Please let me know if you have any ideas, or something isn't right.

##Upcoming and necessary features

* Better authentication and authorization for APIs
* Footer customization for front end
* Menu Sub-Items in front end
* Much more to come!