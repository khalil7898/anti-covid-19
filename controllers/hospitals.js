const hospitalQuerys = require("../db/hospital");

exports.getAll = async function (req, res, next) {
  try {
    const [hospitals, error] = await hospitalQuerys.getAll();
    console.log({ hospitals, error });
    if (error) return res.status(401).json(error);
    res.status(200).json(hospitals);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.add = async function (req, res, next) {
  try {
    const [hospital, error] = await hospitalQuerys.save(req.body);
    if (error) return res.status(401).json(error);
    res.status(200).json(hospital);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
