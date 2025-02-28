const mongoose = require('mongoose');

const ShlokaSchema = new mongoose.Schema({
  devanagari: {
    type: String,
    required: true
  },
  english: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Shloka', ShlokaSchema);