const express = require("express");
const morgan = require('morgan');


const app = express();

const userRouter = require('./routes/userRouter');
const tourRouter = require('./routes/tourRouter');



// Middleware to parse JSON
app.use(express.json());

//  Use the userRouter for all /users routes
app.use('/api/users', userRouter);

//  Use the tourRouter for all /tours routes
app.use('/api/tours', tourRouter);

// Morgan
app.use(morgan('tiny'));

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});