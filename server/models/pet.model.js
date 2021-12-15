const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter Pet Name'],
      minlength: [3, 'Pet Name Must be at least 3 characters'],
    },
    type: {
      type: String,
      required: [true, 'Please enter a Pet Type'],
      minlength: [3, 'Pet Type Must be at least 3 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please enter a Description'],
      minlength: [3, 'Description Must be at least 3 characters'],
    },
    skillOne: {
      type: String,
      required: [false],
    },
    skillTwo: {
      type: String,
      required: [false],
    },
    skillThree: {
      type: String,
      required: [false],
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model('Pet', PetSchema);
