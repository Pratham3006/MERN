const validator = require("validator");
const mongoose = require("mongoose");

const gender = ["male", "female"];

const loginSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true, // Ensure email is stored in lowercase
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email',
    },
  },
  gender: {
    type: String,
    required: true,
    enum: gender, // Ensure gender is one of the specified values in the array
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(value) {
        // Custom validation for phone number format
        return validator.isMobilePhone(value, 'any', { strictMode: false });
      },
      message: 'Invalid phone number format',
    },
  },
  age: {
    type: Number,
    required: true,
    min: 18, // Minimum age requirement
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Minimum password length requirement
  },
});


const creds= mongoose.model('loginreq', loginSchema);
module.exports =creds;
