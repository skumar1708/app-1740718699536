const Shloka = require('../models/Shloka');

// Get all shlokas
exports.getShlokas = async (req, res) => {
  try {
    const shlokas = await Shloka.find();
    res.json(shlokas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};