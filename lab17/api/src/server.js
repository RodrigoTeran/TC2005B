const express = require("express");
const path = require("path");
const app = express();
const { getCookie } = require("./utils/cookies");
const session = require('express-session');

app.set("port", process.env.PORT);
app.use(session({
    secret: process.env.SECRET,
    resave: false, // La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, // Asegura que no se guarde una sesión para una petición que no lo necesita
}));

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));
app.use(express.json());

// Middleware cookie
app.use("*", (req, res, next) => {
    getCookie(req);
    return next();
});

app.use("/", require("./routes/index.routes"));
app.use("/user", require("./routes/user.routes"));
app.use("/public", express.static(path.join(__dirname, "/public")));

app.get("*", (_, res) => {
    res.render('pages/404');
});

module.exports = app;