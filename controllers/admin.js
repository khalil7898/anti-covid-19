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

exports.login = async function (req, res, next) {
  try {
    const email = req.body.email,
      password = req.body.password;
    if (!email || !password) throw new Error("Bad Request!!");
    const { admin, token } = await adminQuerys.findAdminByCredentials(
      email,
      password
    );
    res.status(201).json({
      name: admin.name,
      cin: admin.cin,
      email: admin.email,
      dateNaiss: admin.dateNaiss,
      telephone: admin.telephone,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

exports.getAll = function (req, res, next) {
  res.send("admin");
};
