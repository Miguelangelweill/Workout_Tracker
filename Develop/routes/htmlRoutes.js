// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/exercise", (req, res) => {
    // If the user already has an account send them to the members page
    
      res.sendFile(path.join(__dirname, "../public/exercise.html"));
    
    
  });

  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
