const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validationRegisterInput (data) {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";
  data.dob = !isEmpty(data.dob) ? data.dob : "";
  data.tob = !isEmpty(data.tob) ? data.tob : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.mariageStatus = !isEmpty(data.mariageStatus) ? data.mariageStatus : "";
  data.language = !isEmpty(data.language) ? data.language : "";
  data.profilePicture = !isEmpty(data.profilePicture) ? data.profilePicture : "";

  if (!Validator.isLength(data.userName, { min: 3, max: 25 })) {
    errors.userName = "userName needs to be between 3 and 25 characters";
  }

  if (Validator.isEmpty(data.userName)) {
    errors.userName = "userName field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be atleast 6 characters";
  }

  // if (Validator.isEmpty(data.phoneNumber)) {
  //   errors.phoneNumber = "phoneNumber field is required";
  // }

  // if (Validator.isEmpty(data.dateOfBirth)) {
  //   errors.dateOfBirth = "dateOfBirth field is required";
  // }

  // if (Validator.isEmpty(data.timeOfBirth)) {
  //   errors.timeOfBirth = "timeOfBirth field is required";
  // }

  if (Validator.isEmpty(data.gender)) {
    errors.gender = "gender is required";
  }

  // if (Validator.isEmpty(data.maritalStatus)) {
  //   errors.maritalStatus = "MaritalStatus field is required";
  // }
  if (Validator.isEmpty(data.language)) {
    errors.language = "language field is required";
  }

  if (!isEmpty(data.profilePicture)) {
    if (!Validator.isURL(data.profilePicture)) {
      errors.profilePicture = "Not a valid Url for profilePicture";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
