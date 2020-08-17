const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4; // default is 4 for thread pool

setTimeout(() => console.log("Timer 1 is finished "), 0);
setImmediate(() => console.log("Immedialtely 1 is finished"));

fs.readFile("test-file.txt", (e, data) => {
  console.log("IO read file finished");
  console.log("--------------------");
  setTimeout(() => console.log("Timer 2 is finished "), 0);
  setTimeout(() => console.log("Timer 3 is finished "), 3000);
  setImmediate(() => console.log("Immedialtely 2 is finished"));

  process.nextTick(() => console.log("process.nextTick#1"));

  crypto.pbkdf2Sync("mypassword", "salt", 100000, 1024, "sha512");
  console.log(`${Date.now() - start}ms Password encrypted !!!! pbkdf2Sync`);

  crypto.pbkdf2("mypassword", "salt", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms Password encrypted !!!!`);
  });
  crypto.pbkdf2("mypassword", "salt", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms Password encrypted !!!!`);
  });
  crypto.pbkdf2("mypassword", "salt", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms Password encrypted !!!!`);
  });
  crypto.pbkdf2("mypassword", "salt", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms Password encrypted !!!!`);
  });
});

console.log("Hello from TOP LEVEL CODE");
