const mongoose = require("mongoose");
const Resource = require('./Resource');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  email: {
    type: String,
  },
  profession: {
    type: String,
  },
  interests: {
    type: String,
  },
  resources: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Resource', //this references the model
    }],
  // googleId: {
  //   type: String,
  //   required: true,
  // },
  // displayName: {
  //   type: String,
  //   required: true,
  // },
  // firstName: {
  //   type: String,
  //   required: true,
  // }, // don't really need due to display name
  // lastName: {
  //   type: String,
  //   required: true,
  // },
  // image: {
  //   type: String,
  // },
  // createdAt: {
  //   type: Date,
  //   required: Date.now,
  // },
});

const User = mongoose.model('User', UserSchema)

module.exports = User

//? const GUserSchema = new mongoose.Schema({
//?  googleId: {
//?     type: String,
//?     required: true,
//?   },
//?   displayName: {
//?     type: String,
//?     required: true,
//?   },
//?   firstName: {
//?     type: String,
//?     required: true,
//?   }, // don't really need due to display name
//?   lastName: {
//?     type: String,
//?     required: true,
//?   },
//?   image: {
//?     type: String,
//?   },
//?   createdAt: {
//?     type: Date,
//?     required: Date.now,
//?   },
//? });

//const User = mongoose.model("User", UserSchema);
//! Top and bottom
//module.exports = User;

// module.exports = mongoose.model("User", UserSchema);
// //module.exports = mongoose.model("GUser", GUserSchema);

