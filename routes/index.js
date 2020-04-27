var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send(
    "Anti-COVID-19 Web App created with Express, React and Love. #Stay_Home #Stay_Safe. :)\nKhalil Zouari,\tDhia Gara,\tNader Zini,\tAnis Meddeb."
  );
});

module.exports = router;
