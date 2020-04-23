const express = require("express");
const router = express.Router();
const authAdmin = require("../middlewares/authAdmin");
/* GET users listing. */
router.get("/", authAdmin, function (req, res, next) {
  res.send("admin");
});

module.exports = router;
