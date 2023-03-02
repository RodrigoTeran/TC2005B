const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render('pages/index', {
        variable: "Khe chido!"
    });
});

module.exports = router;