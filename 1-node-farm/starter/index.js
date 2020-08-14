const fs = require("fs");
const http = require("http");
const url = require("url");

// /////////////////////////////////////////7
// FILES

// Blocking synchronous way

// const textIn = fs.readFileSync('./txt/input.txt','utf-8');
// console.log(textIn);
// const textOut = `This is what we know about the avocado \n${textIn}\n ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', textOut);

// NON -Blocking synchronous way

// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   // console.log(data)
//   fs.readFile(`./txt/${data}.txt`, "utf-8", (err, data2) => {
//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//         fs.writeFile('./txt/final.txt', `${data2}\n${data3}` , 'utf-8', err => {
//             console.log(`Yeaahhh 😂`)
//         })
//     });
//   });
// });
// console.log("DONE!!");

// /////////////////////////////////////////7
// SERVER
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/overview" || pathName === "/") {
    res.end("overview ...");
  } else if (pathName === "/product") {
    res.end("product ...");
  } else {
      res.writeHead(404, {
          'Content-type':'text/html',
          'my-own-hd': 'hellopas'
      });
      res.end('<h1>Page not Found</h1>');
  }
});

const PORT = 8000;
const HOST = "127.0.0.1";
server.listen(PORT, HOST, () => {
  console.log(`Listening on ${HOST}:${PORT} `);
});
