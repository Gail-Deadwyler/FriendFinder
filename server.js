/**
 * Programming assignment:  Friend Finder
 * Developer:               Gail Deadwyler
 * Date Written:            9/14/19
 * Purpose:                 This is a compatibility-based "FriendFinder" application
 *                          -- basically a dating app. This full-stack site will 
 *                          take in results from a survey, then compare answers 
 *                          with those from other users. The app will then display the name 
 *                          and picture of the user with the best overall match.
 *                          
 */

//Dependencies
// =============================================================
var express = require("express");


// Sets up the Express App
// =============================================================
var app = express();

//Define a PORT
// =============================================================
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing and to use json data
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Starts the server to begin listening on PORT 3000 or Heroku PORT
// =============================================================
app.listen(PORT, function (err) {
    if (err) throw err;
    console.log(`Listening on PORT: ${PORT}`);

});
