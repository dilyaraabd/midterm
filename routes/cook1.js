const express = require("express");
const path = require("path")
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendFile(path.resolve("./views/cook1.ejs")))
    .post((req, res) => res.send("POST HOME"));
module.exports = router;