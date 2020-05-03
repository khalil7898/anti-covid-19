const mongoose = require("mongoose");

const dbName = "test"
const CONNEXION_URL =
  //process.env.CONNEXION_URL ||
  `mongodb+srv://admin:n3cju8IzHtiSFbTG@clusterkz-uovxe.mongodb.net/${dbName}?retryWrites=true&w=majority`;

module.exports.connect = () =>
  mongoose.connect(
    CONNEXION_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
      err
        ? console.log("MONGOOSE ERROR :\t", err)
        : console.log("Connected to database");
    }
  );
