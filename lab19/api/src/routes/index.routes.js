const express = require("express");
const { isAdmin } = require("../middlewares/auth");
const { createUser, logIn, getInfo, myData, createData, deleteData, createPokemonRegistry } = require("../controllers/index.controller");

const router = express.Router();

// Pages
router.get("/", async (req, res) => {
    const phrase = await getInfo();
    res.render('pages/index', {
        msg: phrase,
        name: req.session.name || ":)",
        auth: req.session.isLoggedIn ? "Con sesión" : "Sin sesión"
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
router.get("/login", async (_, res) => {
    res.render('pages/login');
});
router.get("/signup", async (_, res) => {
    res.render('pages/signup');
});
router.post("/api/login", logIn);
router.post("/api/signup", createUser);
router.post("/api/datos", createData);
router.delete("/api/datos", deleteData);
router.post("/api/pokemon", createPokemonRegistry);

router.get("/api/admin", isAdmin, (req, res) => {
    res.render('pages/admin');

});

module.exports = router;