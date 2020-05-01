const State = require("../models/State");

exports.getAll = () =>
  State.find()
    .then((hospitals) => [hospitals, null])
    .catch((error) => [null, error]);
