const express = require("express");
const router = express.Router();

router.get("/new", require("./controllers/new"));

router.get("/:id/edit", require("./controllers/edit"));

router.post("/", require("./controllers/create"));

router.put("/:id", require("./controllers/update"));

router.delete("/:id", require("./controllers/destroy"));

module.exports = router;
