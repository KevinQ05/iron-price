const express = require("express");
const { createSplit } = require("../controllers/excercises");

const router = express.Router();

const { protect } = require("../middleware/auth");

router.route("/splits").post(protect, createSplit);

module.exports = router;
