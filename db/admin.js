const Admin = require("../models/Admin");

exports.findAdminByCredentials = (email, password) =>
  Admin.findByCredentials(email, password);

exports.saveAdmin = (admin) => {
  return new Admin(admin)
    .save()
    .then((admin) => {
      if (!admin)
        return [null, new Error("Error while inserting data to DB !!")];
      return admin.generateAuthToken();
    })
    .then((token) => [token, null])
    .catch((error) => {
      return [null, new Error(error.message)];
    });
};

exports.getToken = (admin) => {
  Admin.findOne(admin)
    .then((admin) => admin.generateAuthToken())
    .then((token) => [token, null])
    .catch((err) => [null, err]);
};

exports.getAllIds = () => (
  console.log("getAllIds"),
  Admin.find().then((admins) =>
    admins.map((e) => ({ _id: e._id, email: e.email }))
  )
);
