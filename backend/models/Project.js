const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  createdBy: {
    type: String
  },

  teamMembers: [
    {
      type: String
    }
  ]

}, { timestamps: true });

module.exports = mongoose.model(
  "Project",
  projectSchema
);