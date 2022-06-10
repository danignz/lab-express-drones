const express = require("express");
const router = express.Router();
// require the Drone model here
const Drone = require("../models/Drone.model");

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const drones = await Drone.find({});
    res.render("drones/list", { drones });
  } catch (err) {
    next(err);
  }
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/drones/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;
  const intPropellers = parseInt(propellers);
  const intMaxSpeed = parseInt(maxSpeed);

  try {
    await Drone.create({
      name,
      propellers: intPropellers,
      maxSpeed: intMaxSpeed,
    });
    res.redirect("/drones");
  } catch (error) {
    console.error("ERROR!!!", error);
    res.render("drones/create-form");
  }
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
