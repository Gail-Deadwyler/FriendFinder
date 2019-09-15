# FriendFinder
This is a compatibility-based "FriendFinder" application-- basically a dating app. This full-stack site will take in results from a survey, then compare answers with those from other users. The app will then display the name and picture of the user with the best overall match.

## Overview
Installed npm package (**express**) using npm install <npm package name>. Initialized `package.json` using `npm init -y`. Created a `.gitignore` file to exclude: `node_modules and .DS_Store`. Created an instance of Express and stored in app variable. Defined a PORT utlilizing a Heroku port (**process.env.PORT**) or 3000. Set up the Express app to handle data parsing and to use json data. Pointed server to a series of "route" files (**require("./app/routing/apiRoutes")(app)**)(**require("./app/routing/htmlRoutes")(app)**). Started server to listen on required PORT. Server.js file required npm packages: (**express and path**). (**htmlRoutes.js**) included two routes: GET Route to /survey which displayed the survey page and / Route that displays the home page. (**apiRoutes.js**) included two routes: GET route with the url /api/friends used to display a JSON of all possible friends and a POST route /api/friends used to handle incoming survey results. This route also determined the users most compatible friend based on absolute value of the difference in users scores. The most compatible match is rendered to the browser. Also, dummy data contained an array of objects stored in friends.js.

## File Structue
FriendFinder
*   - .gitignore  
*   - app  
*       - data  
*           - friends.js  
*       - public  
*           - home.html  
*           - survey.html  
*       - routing  
*           - apiRoutes.js  
*           - htmlRoutes.js  
*   - node_modules  
*   - package.json  
*   - server.js

## How to use the app
From the home page, the user clicks the survey button and a survey page is rendered. The user enters their name, enters a photo link and answers 10 questions. The user clicks submit and the most compatible person, based on interests, is revealed. Also, from the home page, a user can click the api/friends link to see JSON data of possible friends.

## Technologies used:
Node  
Express  
Heroku  

## My role in app development
According to the project specifications, I created the code and tested the functionality of this application.

