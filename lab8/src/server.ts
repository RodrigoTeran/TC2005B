import express from "express";
import cors from "cors";
import fs from "fs";
import {validate} from "./utils/validate";

export const app = express();

app.set("port", process.env.PORT);
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        allowedHeaders: ["Content-Type", "Authorization", "Accept"],
        credentials: true
    })
);

// Routes
app.post("/promedio", (req, res) => {
    const { array } = req.body;
    const sum = array.reduce((partialSum, a) => partialSum + a, 0);
    return res.status(200).json({
        promedio: (sum / array.length).toFixed(2)
    })
});
app.post("/texto", (req, res) => {
    const { texto } = req.body;
    const createStream = fs.createWriteStream("archivo.txt");
    createStream.write(texto)
    createStream.end();
    return res.status(200).json({
        msg: "Archivo generado con éxito!"
    });
});
app.put("/funcionalidad", (req, res) => {
    const { password } = req.body;
    return res.status(200).json({
        msg: validate(password)
    });
});