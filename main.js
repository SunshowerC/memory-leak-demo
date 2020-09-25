const http = require("http");
// const heapdump = require("heapdump");

const requestLogs = [];
const server = http.createServer((req, res) => {
  // if (req.url === "/heapdump") {
  //   heapdump.writeSnapshot((err, filename) => {
  //     console.log("Heap dump written to", filename);
  //   });
  // }
  
  requestLogs.push(...Array.from(Array(100), ()=>({ url: req.url, date: new Date() })));
  res.end();
});

server.listen(3000);
console.log("Server listening to port 3000. Press Ctrl+C to stop it.");
console.log(
  `Heapdump enabled. Run "kill -USR2 ${
    process.pid
  }" or send a request to "/heapdump" to generate a heapdump.`
);