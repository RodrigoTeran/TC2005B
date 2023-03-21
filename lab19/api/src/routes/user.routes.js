const express = require("express");

const router = express.Router();

router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect('/'); // Este código se ejecuta cuando la sesión se elimina.
    });
});


module.exports = router;