// ===============================================================================
// DATA
// Below data will hold all of the friends data.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [

    {
        "name": "Joseph Gordon ",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJpLEtAUllVLy5aOV--Il95TWvhmHzJfWZ7cT9G4bXc7rNAkisFQ",
        "scores":[
            7,
            5,
            3,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
    },
    {
        "name": "Jamie Mueller",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLHujDlXsFTnxaLGZPjnrPejsDGCGVk92CXEf8cW5tBN9nG9rU",
        "scores":[
            5,
            1,
            2,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
    }

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;