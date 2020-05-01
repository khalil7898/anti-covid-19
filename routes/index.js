const express = require("express");
const router = express.Router();
const state = require("../controllers/state");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send(
    "Anti-COVID-19 Web App created with Express, React and Love. #Stay_Home #Stay_Safe. :)\nKhalil Zouari,\tDhia Gara,\tNader Zini,\tAnis Meddeb."
  );
});

router.get("/getStates", state.getAll);

module.exports = router;
