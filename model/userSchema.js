// const mongoose = require("mongoose");

// const schema = new mongoose.Schema({
//   full_name: String,
//   age: Number,
//   email: String,
// });

// const UserModel = mongoose.model("users", schema);

// module.exports = UserModel;


// new userschema (is ka under jo bhi requirment lazmi hai who dali hai.)


const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  phone_no: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("user", schema);

module.exports = UserModel;