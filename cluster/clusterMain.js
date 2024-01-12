import cluster from "cluster";
import http from "node:http";

if (cluster.isPrimary) {
  console.log(`Master process ${process.pid} running`);
  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker node process ${process.pid} running`);
  const server = http.createServer(async (req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home Page");
    } else if (req.url === "/slow-page") {
      //   for (let i = 0; i < 6000000000; i++) {}
      setTimeout(() => {}, 10000);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Slow Page");
    }
  });

  server.listen(8000, () => console.log(`server is listening on port ${8000}`));
}
