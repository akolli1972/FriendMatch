var path = require("path");
module.exports = function(app) {
  app.get("/", function(req, res) {
    // res.send("Home page to initiate the survey")
    res.sendFile(path.join(__dirname, "..\\public\\home.html"));
  });

  app.get("/survey", function(req, res) {
    // res.send("Survey page for the user")
    //res.sendFile(path.join(__dirname, "..\\public\\survey.html"));TODO with public static serve
    res.sendFile(path.join(__dirname, "..\\public\\survey2.html"));
  });
};
