const express = require("express");
const tourRouter = express();

const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require("../controllers/tourControllers"); 

// Middleware to parse JSON
tourRouter.use(express.json());

// ROUTES
// GET /tours
tourRouter.get("/tours", getAllTours);

// POST /tours
tourRouter.post("/tours", createTour);

// GET /tours/:tourId
tourRouter.get("/tours/:tourId", getTourById);

// PUT /tours/:tourId
tourRouter.put("/tours/:tourId", updateTour);

// DELETE /tours/:tourId
tourRouter.delete("/tours/:tourId", deleteTour);

// const port = 4000;
// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

module.exports = tourRouter;