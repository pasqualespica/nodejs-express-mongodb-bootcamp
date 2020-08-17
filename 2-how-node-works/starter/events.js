// Events and Event-Driven Architecture
const http = require("http");

const EventEmitter = require("events");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was new sale EVENT !!!");
});

myEmitter.on("newSale", () => {
  console.log("Customer JON !!!");
});

myEmitter.on("newSale", (arg1) => {
  console.log(`with arguments ${arg1}`);
});

myEmitter.emit("newSale", 9);

////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("request received :)");
  res.end("request received ");
});

server.on("request", (req, res) => {
  console.log("another request received 😂");
});

server.on("close", () => {
  console.log("server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("waiting on");
});
