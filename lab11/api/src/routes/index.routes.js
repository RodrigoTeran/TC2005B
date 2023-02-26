const express = require("express");
const { getInfo, myData, createData, deleteData, createPokemonRegistry } = require("../controllers/index.controller");

const router = express.Router();

router.get("/info", getInfo);
router.get("/datos", myData);
router.post("/datos", createData);
router.delete("/datos", deleteData);
router.post("/pokemon", createPokemonRegistry);

module.exports = router;