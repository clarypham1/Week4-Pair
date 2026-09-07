const express = require("express");
const userRouter = express();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController"); 

// Middleware to parse JSON
userRouter.use(express.json());

// ROUTES
// GET /users
userRouter.get("/users", getAllUsers);

// POST /users
userRouter.post("/users", createUser);

// GET /users/:userId
userRouter.get("/users/:userId", getUserById);

// PUT /users/:userId
userRouter.put("/users/:userId", updateUser);

// DELETE /users/:userId
userRouter.delete("/users/:userId", deleteUser);

// const port = 4000;
// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

module.exports = userRouter;