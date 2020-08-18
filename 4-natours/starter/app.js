const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello !!!!!', app: 'Pasquale' });
});

app.post('/', (req, res) => {
  res.status(200).json({ message: 'DAJEEE' });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT} ...`);
});
