// See also :       https://dog.ceo/dog-api/

const fs = require('fs');

// https://www.npmjs.com/package/superagent
const superagent = require('superagent');
const { formatWithOptions } = require('util');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('Non trovo questo file 🤬');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Nooooooo 😡');
      resolve('Dajee 🤩 ');
    });
  });
};

readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`Razza : ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(`RES ${res.body.message}`);
    return writeFilePro('dog-img.txt', res.body.message);
    // fs.writeFile('dog-img.txt', res.body.message, (err) => {
    //   if (err) return console.log(err.message);
    //   console.log('Ramdom dog image save to file');
    // });
  })
  .then((bahhh) => {
    console.log('Dajeeeeeeeee Salvato !!!', bahhh);
  })
  .catch((err) => {
    console.log(err.message);
  });
