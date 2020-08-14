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

// Tutto il codice qui viene eseguito SOLO UNA volta !!!! quindi nessun problema
const replaceTemplate = function(temp, prodcut){
    let output = temp.replace(/{%PRODUCTNAME%}/g, prodcut.productName);
    output = output.replace(/{%IMAGE%}/g, prodcut.image);
    output = output.replace(/{%PRICE%}/g, prodcut.price);
    output = output.replace(/{%FROM%}/g, prodcut.from);
    output = output.replace(/{%NUTRIENTS%}/g, prodcut.nutrients);
    output = output.replace(/{%QUANTITY%}/g, prodcut.quantity);
    output = output.replace(/{%ID%}/g, prodcut.id);
    output = output.replace(/{%DESCRIPTION%}/g, prodcut.description);

    if (!prodcut.organic) 
        output = output.replace(/{%NOT_ORGANIC%}/g,"not-organic");

    return output;


}

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  // overview page
  if (pathName === "/overview" || pathName === "/") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });    
    
    const cardsHtml = dataObj.map( el => replaceTemplate(tempCard, el)).join('');
    const output = tempOverview.replace("{%PRODUCT_CARDS%}",cardsHtml);
    // console.log(cardsHtml);
    res.end(output);
    // prodcut page
  } else if (pathName === "/product") {
    res.end("product ...");
    //  api
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-hd": "hellopas",
    });
    res.end("<h1>Page not Found</h1>");
  }
});

const PORT = 8000;
const HOST = "127.0.0.1";
server.listen(PORT, HOST, () => {
  console.log(`Listening on ${HOST}:${PORT} `);
});
