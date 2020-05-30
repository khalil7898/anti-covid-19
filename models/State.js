const mongoose = require("mongoose");

module.exports = mongoose.model(
  "State",
  mongoose.Schema({
    nom: {
      type: String,
      required: true,
    },
  })
);
