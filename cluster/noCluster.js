import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/slow-page") {
    for (let i = 0; i < 6000000000; i++) {}
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Slow Page");
  }
});

server.listen(8000, () => console.log(`server is listening on port ${8000}`));
// In above /slow-page is blocking the Home route, so we will use cluster

// pm2 start noCluster.js -i 0
// to run in multiple cluster

// pm2 stop noCluster.js 
// to stop

// pm2 delete noCluster.js
// delete all cluster