const adminQuerys = require("../db/admin");

exports.register = async function (req, res, next) {
  try {
    const [token, error] = await adminQuerys.saveAdmin(req.body);
    if (error) return res.status(400).json({ error });
    res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

exports.getAll = function (req, res, next) {
  res.send("admin");
};
