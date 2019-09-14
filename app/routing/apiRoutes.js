// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends.
// ===============================================================================

var friends = require("../data/friends");

// ===============================================================================
// ROUTING

// ===============================================================================

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        var currentUserScore = req.body.scores;
        var perfectMatch = 1100;
        var matchedIndex = 0;

        for (var i = 0; i < friends.length; i++) {

            var totalDiff = 0;
          
            var currentFriendScores = friends[i].scores;
            friends[i].scores.map((a, i)=>{
               
            totalDiff += Math.abs(a[i] - currentUserScore[i]);
            });

           if(totalDiff <= perfectMatch) {
               perfectMatch = totalDiff;
               matchedIndex = i;

           }
        }
        
         //arr1.map((a, i)=>Math.abs(a-arr2[i]))
        friends.push(req.body);
        res.json(friends[matchedIndex]);
    });





};
