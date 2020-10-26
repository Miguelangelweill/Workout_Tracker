const WorkOut = require("../models/workOutModel");
module.exports = function (app) {
  app.get("/api/workouts", async (req, res) => {
    try {
      const data = await WorkOut.find({});
      res.json(data);
      res.sendStatus(200);
    } catch (error) {
      res.json(error);
      res.sendStatus(500).end();
      console.log("There was an error getting the workouts: ", error);
    }
  });
  //this is the second get route
  app.get("/api/workouts/range", async (req, res) => {
    try {
      const data = await WorkOut.find({});
      const reps =0;
      for(var i=0;i<data.length;i++){
          
      }
      res.json(data);
      res.sendStatus(200);
    } catch (error) {
      console.log("There was an error getting the workouts: ", error);
      res.json(error);
      res.sendStatus(500).end();
    }
  });
  // Post a book to the mongoose database
  app.post("/api/workouts", async ({ body }, res) => {
    // Save the request body as an object called book
    const workOut = body;
    try {
      const data = await WorkOut.create(workOut);
      res.json(data);
      res.sendStatus(200);
    } catch (error) {
      console.log("There was an error creating the workout: ", error);
      res.sendStatus(500).end();
    }
  });

  // // Find all books marked as unread
  // app.get("/unread",async(req, res) => {

  // });

  app.put("/api/workouts/:id", async (req, res) => {
    const workOutId = req.params.id;
    console.log("This is the id",workOutId)
    const workOutType = req.body.type;
    const updateData = req.body;
    console.log(updateData);
    try {
      if (workOutType === "resistance") {
        const data = await WorkOut.findByIdAndUpdate(
          { _id: workOutId },
          updateData,
          { new: true }
        );
        res.json(data);
        res.sendStatus(200);
      } else if (workOutType === "cardio") {
        const data = await WorkOut.findByIdAndUpdate(
          { _id: workOutId },
          {
            updateData,
          },
          {
            new: true,
          }
        );
        res.json(data);
        res.sendStatus(200);
      }
    } catch (error) {
      console.log("This is an error posting", error);
      res.sendStatus(500).end();
    }
  });
};
