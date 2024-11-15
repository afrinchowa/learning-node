const http = require("http");
const fs = require("fs");
// creating a server using raw node/js
const server = http.createServer();
// listenere
server.on("request", (req, res) => {
  if (req.url === "/read-file" && req.method === "GET");
  //steaming file reading
  const readableSteam = fs.createReadStream(process.cwd() + "/texts/readbhul.txt");
  readableSteam.on("data", (buffer) => {
    res.statusCode = 200;
    res.write(buffer);
  });
  readableSteam.on("end", () => {
    res.statusCode = 200;
    res.end("the streaming is over ");
  });
  readableSteam.on("error", () => {
    res.statusCode = 500;
    res.end("something went wrong+ ");
  });
});
server.listen(5000, () => {
  console.log(`server is listening on port 5000`);
});
