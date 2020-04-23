const Admin = require("../models/Admin");

exports.findAdminByCredentials = (email, password) =>
  Admin.findByCredentials(email, password);

exports.saveAdmin = admin => {
  return new Admin(admin)
    .save()
    .then(admin => {
      if (!admin) throw new Error("Error while inserting data to DB !!");
      return admin.generateAuthToken();
    })
    .catch(error => {
      throw new Error(error.message);
    });
};

exports.getToken = admin => {
  Admin.findOne(admin)
    .then(
      admin => (
        console.log("tokinito", admin), admin.generateAuthToken()
      )
    )
    .catch(err => console.log(err));
};

exports.getAllIds = () =>(console.log("getAllIds"),
  Admin.find().then(admins =>
    admins.map(e => ({ _id: e._id, email: e.email }))
  ));
