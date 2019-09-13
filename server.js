/**
 * Programming assignment:  Friend Finder
 * Developer:               Gail Deadwyler
 * Date Written:            9/14/19
 * Purpose:                 In this activity, you'll build a compatibility-based "FriendFinder" 
 *                          application -- basically a dating app. This full-stack site will 
 *                          take in results from your users' surveys, then compare their answers 
 *                          with those from other users. The app will then display the name 
 *                          and picture of the user with the best overall match.
 *                          
 */

//Dependencies
var express = require("express");

//Create an instance of Express
var app = express();

//Define a PORT
var PORT = process.env.PORT || 3000;

//Set server to listen on PORT number
app.listen(PORT, function(err){
    if(err) throw err;
    console.log(`Listening on PORT: ${PORT}`);

});
 