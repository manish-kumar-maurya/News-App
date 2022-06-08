const mongoose = require("mongoose");
const database = require("../../connection/dbConnection");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      min: 3,
      max: 25,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      min: 8,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 30,
    },
    phoneNumber:{
      type: String,
      required: true
    },
    dateOfBirth:{
      type: String,
      required: true,
    },
    timeOfBirth:{
      type: String,
      required: false,
    },
    gender:{
      type: String,
      required: false,
      enum:['MALE', 'FEMALE','OTHER']
    },
    maritalStatus:{
      type: Boolean,
      required: false,
      default:false
    },
    language:{
      type: String,
      required: false,
      enum:['HINDI','ENGLISH']
    },
    profilePicture: {
      type: String,
      default: "",
    }
  }
);

module.exports = User = mongoose.model('user', userSchema);
