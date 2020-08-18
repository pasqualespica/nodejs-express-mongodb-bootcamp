const express = require('express');
const fs = require('fs');

const app = express();

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// middleware a function that modify INCOMING data
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
app.use(express.json());
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Hello !!!!!', app: 'Pasquale' });
// });

// app.post('/', (req, res) => {
//   res.status(200).json({ message: 'DAJEEE' });
// });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// routes ....
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
});

app.post('/api/v1/tours', (req, res) => {
  console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );

  //   res.send(`DONE rx tour name ${req.body.name}!!`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT} ... and price`);
});
