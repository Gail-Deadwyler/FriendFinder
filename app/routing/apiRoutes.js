// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends.
// ===============================================================================

var friends = require("../data/friends");

// ===============================================================================
// ROUTING

// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a formData visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var newScore = req.body.scores;
        console.log(`Score coming from the Form: ${newScore}`);

        var formData = req.body;

        // parseInt the form Data scores because they are coming in as strings
        for (var i = 0; i < formData.scores.length; i++) {
            formData.scores[i] = parseInt(formData.scores[i]);
        }

        // i choose a minimal difference in scores to be 20
        var matched = 0;
        var minDiff = 20;

        //loop through current friends array
        for (var i = 0; i < friends.length; i++) {
            var totalDiff = 0;
            //loop through the friend scores array
            for (var j = 0; j < friends[i].scores.length; j++) {
                var difference = Math.abs(formData.scores[j] - friends[i].scores[j]);
                totalDiff += difference;
            }

            //Now, find the best match after scores are compared
            if (totalDiff <= minDiff) {
                matched = i;
                minDiff = totalDiff;
            }
        }

        // after finding match, add formData to friend array
        friends.push(formData);

        // send match back to the browser
        res.json(friends[matched]);
    });
};