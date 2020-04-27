const Hospital = require("../models/Hospital");

exports.save = function (hospital) {
  return new Hospital({ ...hospital })
    .save()
    .then((hospital) => [hospital, null])
    .catch((error) => [null, hospital]);
};

exports.getAll = () =>
  Hospital.find()
    .then((hospitals) => [hospitals, null])
    .catch((error) => [null, error]);
