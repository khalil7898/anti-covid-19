const Hospital = require("../db/hospital");
const State = require("../db/state");

exports.getAll = async function (req, res, next) {
  try {
    const [hospitals, error] = await Hospital.getAll();
    if (error) return res.status(401).json(error);
    res.status(200).json(hospitals);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

exports.add = async function (req, res, next) {
  try {
    const [state, stateErr] = await State.findById(req.body.state);
    if (stateErr) throw new Error(stateErr);
    if (!state) throw new Error("State ID not found !!");

    const [hospital, error] = await Hospital.save(req.body);
    if (error) return res.status(401).json(error);

    res.status(200).json(hospital);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.delete = async function (req, res, next) {
  try {
    if (!req.body.id) throw new Error("Bad Request");
    const [status, error] = await Hospital.delete(req.body.id);
    if (error) throw new Error(error.message);
    if (status && status.n === 0)
      return res
        .status(200)
        .json({ status: false, message: "This hospital is already deleted." });
    res
      .status(200)
      .json({ status: true, message: "Hospital deleted successfully." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
