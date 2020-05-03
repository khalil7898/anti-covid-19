const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");

const authAdmin = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace('Bearer ', '');
    const decoded = jwt.verify(token, "21695848985");
    const admin = await Admin.findOne({
      _id: decoded._id,
      "tokens.token": token
    });
    if (!admin) {
      throw new Error();
    }
    req.token = token;
    req.admin = admin;
    next();
  } catch (e) {
    res.status(401).send({ error: "please authentificate !!!" });
  }
};

module.exports = authAdmin;
