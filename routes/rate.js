const express = require("express");
const router = express.Router();

const { execPostRate, execAvgRate } = require("../controller/rate");

router.get("/average", execAvgRate);

router.post("/createrate/:postId", execPostRate);

module.exports = router;
