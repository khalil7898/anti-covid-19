const express = require("express");
const router = express.Router();
const authAdmin = require("../middlewares/authAdmin");
const hospital = require("../controllers/hospital");

router.get("/", hospital.getAll);
router.put("/", authAdmin, hospital.add);
router.delete("/", hospital.delete);

module.exports = router;
