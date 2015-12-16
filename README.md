#NodePress

A simple CMS made with the MEAN stack

##Development notes

NodePress is still under construction, but this instance should work out of the box in a 
development environment by following the steps below.

##Steps to configure

1. Make sure to have [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.org/) installed and running on your 
machine
2. npm install and bower install dependencies
3. Open the np-config.js file located at root level and update the db.uri (for Mongoose) and port 
(for Express) manually as needed
4. Run ```node server.js``` or ```nodemon server.js```
5. Goto localhost:3000/np-admin in your web browser (or whatever port you chose in the np-config.js file)
6. Set up a new user, then log in.

##Instructions for use

Create pages, categories, menus, select menu locations, custom home page and select 1 of 2 
starting themes.

To add more themes, copy either the default or awesome-theme from np-site/themes into the same 
folder, rename and edit CSS or HTML.

To view front end pages, go to root localhost url (localhost:3000/) or whatever the domain root is.
(Adding default Home page in DB)

##Miscellaneous notes

For Gulp - gulp watch:adminJS, gulp watch:adminCSS, gulp watch:siteJS will automate 
clientside JS and LESS modifications (setting up a one does all soon and gulp watch:siteCSS...)

I'm currently refactoring some files and directories - there are unnecessary files and folders in
 the np-site/themes/ directories right now.

Plenty of new features are being added, but everything is still very much in testing stage. I 
will keep the README up to date with everything new, or any changes.

Please let me know if you have any ideas, or something isn't right.

##Upcoming and necessary features

* Better error, and not found handling
* Better authentication and authorization for API
* Footer customization for front end
* Sidebar customization for front end
* Menu Sub-Items in front end
* Correct Menu Location display on Menus page