const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
      default: () => Date.now(), // Use a function here
    },
    updatedAt: {
      type: Date,
      required: true,
      default: () => Date.now(), // Use a function here as well
    }
  }
);

// Middleware to update 'updatedAt' before save
todoSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("todo", todoSchema);
