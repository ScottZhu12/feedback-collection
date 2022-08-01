const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: [true, 'Missing Google ID'],
    unique: true,
  },
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
