const fs = require('fs');

users = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/users.json`));

exports.getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'not yet defined',
  });
};
exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'not yet defined',
  });
};
exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'not yet defined',
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'not yet defined',
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'not yet defined',
  });
};