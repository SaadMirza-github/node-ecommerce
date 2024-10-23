const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true,unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }

});

// Middleware to update the `updatedAt` field before saving
userSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('User', userSchema);