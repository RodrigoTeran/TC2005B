const express = require("express");
const path = require("path");
const app = express();

app.set("port", process.env.PORT);

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));
app.use(express.json());
app.use("/", require("./routes/index.routes"));
app.use("/public", express.static(path.join(__dirname, "/public")));

app.get("*", (_, res) => {
    res.render('pages/404');
});

module.exports = app;