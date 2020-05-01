const State = require("../models/State");

exports.getAll = () =>
  State.find()
    .then((hospitals) => [hospitals, null])
    .catch((error) => [null, error]);

exports.findById = (_id) =>
  State.findById({ _id })
    .then((hospital) => [hospital, null])
    .catch((error) => [null, error]);
