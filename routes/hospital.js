const express = require("express");
const router = express.Router();
const authAdmin = require("../middlewares/authAdmin");
const hospitals = require("../controllers/hospitals");

router.get("/",authAdmin, hospitals.getAll);
router.put("/", authAdmin, hospitals.add);

module.exports = router;