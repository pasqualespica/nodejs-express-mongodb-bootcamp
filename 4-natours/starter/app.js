const express = require('express');
// https://github.com/expressjs/morgan
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// middleware a function that modify INCOMING data
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// Our middleware function - and add to middleware stack
app.use((req, res, next) => {
  console.log('hello from my middleware function ... 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Tutto quello che c'è qui viene fatto : only ONE time ....
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// >>>>>>>>>>>>>>> route handlers

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Routes ....
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// mounting routers
app.use('/api/v1/tours', tourRouter); // real middleware !!!!!!!!!!!!!
app.use('/api/v1/users', userRouter); // real middleware !!!!!!!!!!!!!

// app.get('/api/v1/tours', getAllTours);
// ? make optional PARAM
// app.get('/api/v1/tours/:id/:x/:y?', (req, res) => {
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

// // >>>>>>>>>>>>>>> server
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT} ...`);
// });

module.exports = app;
