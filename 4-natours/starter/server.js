const app = require('./app');

// >>>>>>>>>>>x>>>> server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT} ...`);
});
