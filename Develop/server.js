// Requiring all of the dependencies that i will be needing for this application.
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
//The port that the application is running on.
const PORT = 3000;
//Creating and instance of express.
const app = express();
//Setting up the middlewear.
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});
mongoose.set('useFindAndModify', false);
// Routes
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);



// Listen on port 3000
app.listen(PORT, () => {
  console.log("App running on port 3000!--> localhost:", PORT);
});
