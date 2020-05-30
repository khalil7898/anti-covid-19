const Hospital = require("../models/Hospital");

exports.save = function (hospital) {
  return new Hospital({ ...hospital })
    .save()
    .then((hospital) => [hospital, null])
    .catch((error) => [null, error]);
};

exports.getAll = () =>
  Hospital.find()
    .populate({ path: "state", select: "nom" })
    .exec()
    .then((hospitals) => [hospitals, null])
    .catch((err) => [null, err]);

exports.delete = (_id) =>
  Hospital.deleteOne({ _id })
    .then((status) => [status, null])
    .catch((error) => [null, error]);
