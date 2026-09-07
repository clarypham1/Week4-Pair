const express = require("express");

const app = express();

const userRouter = require('./routes/userRouter');
const tourRouter = require('./routes/tourRouter');

const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require("./controllers/tourControllers.js"); 

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("./controllers/userController.js");

// Middleware to parse JSON
app.use(express.json());

//  Use the userRouter for all /users routes
app.use('/api/users', userRouter);

//  Use the tourRouter for all /tours routes
app.use('/api/tours', tourRouter);

// ROUTES
// GET /tours
app.get("/api/tours", getAllTours);

// POST /tours
app.post("/api/tours", createTour);

// GET /tours/:tourId
app.get("/api/tours/:tourId", getTourById);

// PUT /tours/:tourId
app.put("/api/tours/:tourId", updateTour);

// DELETE /tours/:tourId
app.delete("/api/tours/:tourId", deleteTour);

//  Use the userRouter for all /users routes
// app.use('/api/tours', tourRouter);

app.get("/api/users", getAllUsers);

app.post("/api/users", createUser);

app.get("/api/users/:userId", getUserById);

app.put("/api/users/:userId", updateUser);

app.delete("/api/users/:userId", deleteUser);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});