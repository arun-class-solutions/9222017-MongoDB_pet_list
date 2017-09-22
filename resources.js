const express = require("express");
const router = express.Router();

router.use("/owners", require("./resources/owners"));

router.use("/pets", require("./resources/pets"));

module.exports = router;
