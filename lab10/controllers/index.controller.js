const controller = {};
const path = require("path");
const fs = require("fs");

controller.getLab1 = async (_, res) => {
    try {
        fs.readFile(path.join(__dirname, "../public/lab1/index.html"), function (err, html) {
            if (err) {
                throw err;
            }
            res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': html.length });
            res.write(html);
            res.end();
        });
    } catch {
        res.writeHead(404);
        res.write("<h1>ERROR 404: NO ENCONTRADO</h1>");
        res.end();
    };
};

controller.getLab3 = async (_, res) => {
    try {
        fs.readFile(path.join(__dirname, "../public/lab3/index.html"), function (err, html) {
            if (err) {
                throw err;
            }
            res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': html.length });
            res.write(html);
            res.end();
        });
    } catch {
        res.writeHead(404);
        res.write("<h1>ERROR 404: NO ENCONTRADO</h1>");
        res.end();
    };
};

controller.getLab6 = async (_, res) => {
    try {
        fs.readFile(path.join(__dirname, "../public/lab6/index.html"), function (err, html) {
            if (err) {
                throw err;
            }
            res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': html.length });
            res.write(html);
            res.end();
        });
    } catch {
        res.writeHead(404);
        res.write("<h1>ERROR 404: NO ENCONTRADO</h1>");
        res.end();
    };
};

controller.formPage = async (_, res) => {
    try {
        fs.readFile(path.join(__dirname, "../public/memories/index.html"), function (err, html) {
            if (err) {
                throw err;
            }
            res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': html.length });
            res.write(html);
            res.end();
        });
    } catch {
        res.writeHead(404);
        res.write("<h1>ERROR 404: NO ENCONTRADO</h1>");
        res.end();
    };
};

controller.createData = async (req, res) => {
    const fullData = [];

    req.on("data", (data) => fullData.push(data));

    req.on("end", () => {
        const parsedData = Buffer.concat(fullData).toString();
        const text = JSON.parse(parsedData);
        fs.writeFileSync(path.join(__dirname, "../memories/index.txt"), text["text"]);
        return res.end();
    });
};

module.exports = controller;