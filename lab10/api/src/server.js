const express = require("express");
const path = require("path");
const app = express();

app.set("port", process.env.PORT);

// Static
app.use(express.json());

app.use("/", express.static(path.join(__dirname, "/public")));
app.use("/api", require("./routes/index.routes"));

app.get("*", (_, res) => {
    res.status(404).sendFile(path.join(__dirname, "/public/404.html"));
});

module.exports = app;