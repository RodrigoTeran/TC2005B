const express = require("express");
const { getInfo, myData, createData } = require("../controllers/index.controller");

const router = express.Router();

router.get("/info", getInfo);
router.get("/datos", myData);
router.post("/datos", createData);

module.exports = router;