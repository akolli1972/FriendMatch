// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const fs = require("fs");
var randomstring = require("randomstring");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); //TODO: allows static service

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// // HTML Routes
// // Basic route that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
//   // res.send("Home page to initiate the survey")
//   res.sendFile(path.join(__dirname, "\\app\\public\\home.html"));
// });

// app.get("/survey", function(req, res) {
//   // res.send("Survey page for the user")
//   res.sendFile(path.join(__dirname, "\\app\\public\\survey2.html"));
// });

// // API Routes
// // Displays all friends
// app.get("/api/friends", function(req, res) {
//   var filePath = path.join(__dirname, "\\app\\data\\friends.js");
//   var friendsList = [];
//   //Read friends.js and return the array
//   try {
//     friendsList = fs.readFileSync(filePath, "utf8");
//   } catch (err) {
//     console.error(err);
//   }

//   if (friendsList.length != 0) return res.json(JSON.parse(friendsList));
//   else return res.json({ Message: "No friend in the system." });
// });
// // To generate random data
// function randomScore() {
//   //Between 1 to 5
//   return Math.floor(Math.random() * (5 - 1) + 1);
// }

// function arraySum(arr) {
//   var total = 0;
//   for (var i in arr) {
//     total += parseInt(arr[i]);
//   }
//   return total;
// }

// // Saves a survey result, find match and return best match
// app.post("/api/friends", function(req, res) {
//   var filePath2 = path.join(__dirname, "\\app\\data\\friends.js");

//   //Get data from request object
//   userData = req.body;

//   // userData = {
//   //   name: randomstring.generate({
//   //     length: 12,
//   //     charset: "alphabetic"
//   //   }),
//   //   photo: "https://picsum.photos/200/300",
//   //   scores: [
//   //     randomScore(),
//   //     randomScore(),
//   //     randomScore(),
//   //     randomScore(),
//   //     randomScore(),
//   //     randomScore(),
//   //     randomScore(),
//   //     randomScore(),
//   //     randomScore(),
//   //     randomScore()
//   //   ]
//   // };

//   var friends = [];
//   var friendsList = [];

//   //Read existing data from friends.js
//   try {
//     friendsList = fs.readFileSync(filePath2, "utf8");
//     if (friendsList.length != 0) friends = JSON.parse(friendsList);
//   } catch (err) {
//     console.error(err);
//   }

//   //For each friend, do the matching logic
//   var srcSum = arraySum(userData.scores);
//   console.log(srcSum);
//   //Difference will never be more than sum of all values of the survey
//   var minDiff = 50;

//   var friendName = "";
//   var friendPic = "";

//   for (let f of friends) {
//     var targetSum = arraySum(f.scores);
//     var currDiff = Math.abs(srcSum - targetSum);
//     console.log(targetSum);
//     if (currDiff < minDiff) {
//       minDiff = currDiff;
//       //Get the best match
//       friendName = f.name;
//       friendPic = f.photo;
//     }
//   }

//   //Save data to the friends.js in the data folder
//   try {
//     friends.push(userData);
//     fs.writeFileSync(filePath2, JSON.stringify(friends));
//   } catch (err) {
//     console.error(err);
//   }

//   // Return the best match - name and photo
//   return res.json({
//     name: friendName,
//     photo: friendPic
//   });
// });

// // Clear the form after submitting
// // $("#reset").on("click", function(event) {
// //   $("#myForm")[0].reset();
// // });

// // Starts the server to begin listening
// // =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
