const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category', // Self-referencing field
    default: null, // Root categories will have null parent
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Virtual field to populate subcategories
categorySchema.virtual('subcategories', {
  ref: 'Category', // The model to use (self-reference)
  localField: '_id', // Find categories where localField matches foreignField
  foreignField: 'parent', // The field in the same model that points to the parent category
  justOne: false, // Array of subcategories
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
