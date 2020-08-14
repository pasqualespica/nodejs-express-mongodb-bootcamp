const fs = require("fs");

// Blocking synchronous way
// const textIn = fs.readFileSync('./txt/input.txt','utf-8');
// console.log(textIn);
// const textOut = `This is what we know about the avocado \n${textIn}\n ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', textOut);

// NON -Blocking synchronous way
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  // console.log(data)
  fs.readFile(`./txt/${data}.txt`, "utf-8", (err, data2) => {
    fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
        fs.writeFile('./txt/final.txt', `${data2}\n${data3}` , 'utf-8', err => {
            console.log(`Yeaahhh 😂`)
        })
    });
  });
});

console.log("DONE!!");
