const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Hospital",
  mongoose.Schema({
    nom: {
      type: String,
      required: true,
    },
    telephone: {
      type: Number,
      required: true,
    },
    adress: {
      nom: { type: String, required: true },
      longitude: { type: Number, required: true },
      latitude: { type: Number, required: true },
    },
    capaciteTotal: { type: Number },
    capaciteCorona: { type: Number },
    capaciteRea: { type: Number },
    reacharger: { type: Number },
    totalCharger: { type: Number },
    coronaCharger: { type: Number },
    state: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "State",
      required: true,
    },
  })
);
