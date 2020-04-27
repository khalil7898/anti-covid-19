const express = require("express");
const router = express.Router();
const authAdmin = require("../middlewares/authAdmin");
const admin = require("../controllers/admin")

router.get("/", authAdmin, admin.getAll);
router.post("/register", admin.register);

module.exports = router;