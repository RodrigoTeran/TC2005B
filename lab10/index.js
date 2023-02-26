const http = require("http");
const dotenv = require("dotenv");
const { getLab1, getLab3, getLab6, formPage, createData } = require("./controllers/index.controller");
dotenv.config();

const server = http.createServer(async (req, res) => {
  const path = req.url;

  switch (path) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.write('<meta charset="UTF-8" />');
      res.write(`<h1>Links</h1>`);
      res.write(`<a href='lab1'>lab1</a> <br>`);
      res.write(`<a href='lab3'>lab3</a> <br>`);
      res.write(`<a href='lab6'>lab6</a> <br>`);
      res.write(`<a href='api/datos'>Crear memorias</a> <br>`);
      res.end();
      break;

    case "/lab1":
      await getLab1(req, res);
      break;

    case "/lab3":
      await getLab3(req, res);
      break;

    case "/lab6":
      await getLab6(req, res);
      break;

    case "/api/datos":
      if (req.method === "GET") {
        await formPage(req, res);
        break;
      } else {
        await createData(req, res);
        break;
      }
    default:
      res.writeHead(404);
      res.write("<h1>ERROR 404: NO ENCONTRADO</h1>");
      res.end();
      break;
  }
});

server.listen(process.env.PORT);