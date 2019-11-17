var path = require("path");
var fs = require("fs");
module.exports = function(app) {
  // API Routes
  // Displays all friends
  app.get("/api/friends", function(req, res) {
    var filePath = path.join(__dirname, "..\\data\\friends.js");
    var friendsList = [];
    //Read friends.js and return the array
    try {
      friendsList = fs.readFileSync(filePath, "utf8");
    } catch (err) {
      console.error(err);
    }

    if (friendsList.length != 0) return res.json(JSON.parse(friendsList));
    else return res.json({ Message: "No friend in the system." });
  });
  // To generate random data
  function randomScore() {
    //Between 1 to 5
    return Math.floor(Math.random() * (5 - 1) + 1);
  }

  function arraySum(a, b) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
      sum = sum + Math.abs(a[i] - b[i]);
    }
    return sum;
  }

  // Saves a survey result, find match and return best match
  app.post("/api/friends", function(req, res) {
    var filePath2 = path.join(__dirname, "..\\data\\friends.js");

    //Get data from request object
    userData = req.body;

    // userData = {
    //   name: randomstring.generate({
    //     length: 12,
    //     charset: "alphabetic"
    //   }),
    //   photo: "https://picsum.photos/200/300",
    //   scores: [
    //     randomScore(),
    //     randomScore(),
    //     randomScore(),
    //     randomScore(),
    //     randomScore(),
    //     randomScore(),
    //     randomScore(),
    //     randomScore(),
    //     randomScore(),
    //     randomScore()
    //   ]
    // };

    var friends = [];
    var friendsList = [];

    //Read existing data from friends.js
    try {
      friendsList = fs.readFileSync(filePath2, "utf8");
      if (friendsList.length != 0) friends = JSON.parse(friendsList);
    } catch (err) {
      console.error(err);
    }

    //For each friend, do the matching logic
    console.log(srcSum);
    //Difference will never be more than sum of all values of the survey
    var minDiff = 50;

    var friendName = "";
    var friendPic = "";

    for (let f of friends) {
      var currDiff = arraySum(f.scores, userData.scores);
      if (currDiff < minDiff) {
        minDiff = currDiff;
        //Get the best match
        friendName = f.name;
        friendPic = f.photo;
      }
    }

    //Save data to the friends.js in the data folder
    try {
      friends.push(userData);
      fs.writeFileSync(filePath2, JSON.stringify(friends));
    } catch (err) {
      console.error(err);
    }

    // Return the best match - name and photo
    return res.json({
      name: friendName,
      photo: friendPic
    });
  });
};
