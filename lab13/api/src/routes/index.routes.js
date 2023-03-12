const express = require("express");
const { getInfo, myData, createData, deleteData, createPokemonRegistry } = require("../controllers/index.controller");

const router = express.Router();

// Pages
router.get("/", (_, res) => {
    const phrase = getInfo();

    res.render('pages/index', {
        msg: phrase
    });
});
router.get("/memories", (_, res) => {
    res.render('pages/memories');
});
router.get("/pokemon", (_, res) => {
    res.render('pages/pokemon');
});
router.get("/registry", async (_, res) => {
    const data = await myData();
    res.render('pages/registry', {
        data
    });
});

router.post("/api/datos", createData);
router.delete("/api/datos", deleteData);
router.post("/api/pokemon", createPokemonRegistry);

module.exports = router;