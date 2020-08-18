const express = require('express');
const tourController = require('./../controllers/tourController');
// const {getAllTours, ...} = require('../controllers/tourController');

const router = express.Router();

// middleware params specified only this
// router.param('id', (req, res, next, value) => {
//   console.log(`Tour id is ${value}`);
//   next();
// });
router.param('id', tourController.checkId);

// Create a checkbody middleware
// check ig body contains the name and price property
// if not send back 404 ( bad request )
// add it to the POST handler stack

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBodyMiddleware, tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
