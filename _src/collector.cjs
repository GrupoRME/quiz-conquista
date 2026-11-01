// Servidor local de captura: recebe POST text/plain do navegador de teste e salva em _src/dom/<name>
const http = require("http");
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "dom");
fs.mkdirSync(dir, { recursive: true });
http
  .createServer((req, res) => {
    const name = path.basename(decodeURIComponent((req.url || "/x").split("?")[0]));
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => {
      if (req.method === "POST" && name) fs.writeFileSync(path.join(dir, name), Buffer.concat(chunks));
      res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
      res.end("ok");
    });
  })
  .listen(8799, "127.0.0.1", () => console.log("listening 8799"));
