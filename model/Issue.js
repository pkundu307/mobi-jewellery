const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  issue: {
    type: String,
    required: true,
    trim: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const ContactUsModel = mongoose.model('ContactUs', contactUsSchema);

module.exports = ContactUsModel;
