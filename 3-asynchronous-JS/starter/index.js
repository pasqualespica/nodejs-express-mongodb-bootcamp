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

// Consuming Promises with Async/Await
// ritorna automaticamente una Promise
const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Razza : ${data}`);

    const res1Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res2Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res3Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );

    const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
    // console.log(res.body.message);
    const immagini = all.map((el) => el.body.message);
    console.log(immagini);

    // await writeFilePro('dog-img.txt', res.body.message);
    await writeFilePro('dog-img.txt', immagini.join('\n'));
    console.log('SALVATO Dajee 🤩 ');
  } catch (error) {
    // console.log(`OOOOOO errore ${error}`);
    throw error;
  }
  return 'READY ..... 🐶';
};

// console.log('step ...1');
// // Chiamata ...
// // const x = getDogPic();
// // console.log(x);
// getDogPic()
//   .then((ritorno) => {
//     console.log(ritorno);
//   })
//   .catch((err) => {
//     console.log('Erororororororor !!', err);
//   });
// console.log('step ...2');

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// INVECE di usare Then/Catch con le Promise come sopra possiamo fare in un altro modo
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::

(async () => {
  try {
    console.log('1: .....');
    const x = await getDogPic();
    console.log(x);
    console.log('3. Done !!!');
  } catch (error) {
    console.log('ERRORE !!', error);
  }
})(); // declare and call 1 Anonymous ASYNC funciotn WAAAAAAAOOOOO !!!

// readFilePro(`${__dirname}/dog.txt`)
//   .then((data) => {
//     console.log(`Razza : ${data}`);
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then((res) => {
//     console.log(`RES ${res.body.message}`);
//     return writeFilePro('dog-img.txt', res.body.message);
//     // fs.writeFile('dog-img.txt', res.body.message, (err) => {
//     //   if (err) return console.log(err.message);
//     //   console.log('Ramdom dog image save to file');
//     // });
//   })
//   .then((bahhh) => {
//     console.log('Dajeeeeeeeee Salvato !!!', bahhh);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
