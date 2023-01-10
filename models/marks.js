const mongoose = require("mongoose");

// Describing the structure (schema) of the data to be stored
const marksSchema = new mongoose.Schema({
   "100m": Number,
   "200m": Number,
   "400m": Number,
   "100mh": Number,
   "400mh": Number,
   "4x100m": Number,
   "4x400": Number,
   "800m": Number,
   "1600m": Number,
   "3200m": Number,
});

// Exporting the finalized schemas
module.exports = mongoose.model("Marks", marksSchema);
