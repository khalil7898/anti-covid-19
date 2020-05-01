const state = require("../db/state");

exports.getAll = async function (req, res, next) {
  try {
    const [states, error] = await state.getAll();
    if (error) throw new Error(error.message);
    res.status(200).json(states);
  } catch (error) {
    res.status(400).json(error);
  }
};
