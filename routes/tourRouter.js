const express = require("express");
const tourRouter = express();
const auth = require("../middleware/auth");

const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require("../controllers/tourControllers"); 



// ROUTES
// GET /tours
tourRouter.get("/", getAllTours);
tourRouter.get("/", getAllTours);

// GET /tours/:tourId
tourRouter.get("/:tourId", getTourById);
tourRouter.use(auth); // Apply the auth middleware to all routes below

// POST /tours
tourRouter.post("/", createTour);
// PUT /tours/:tourId
tourRouter.put("/:tourId", updateTour);

// DELETE /tours/:tourId
tourRouter.delete("/:tourId", deleteTour);

// const port = 4000;
// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

module.exports = tourRouter;