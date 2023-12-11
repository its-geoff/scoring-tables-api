const mongoose = require("mongoose");

// Describing the structure (schema) of the data to be stored
const marksSchema = new mongoose.Schema({
   _id: Number,
   "100m": Number,
   "200m": Number,
   "400m": Number,
   "100mH": Number,
   "110mH": Number,
   "400mH": Number,
   "4x100m": Number,
   "4x400": Number,
   "800m": Number,
   "1600m": Number,
   "3200m": Number,
   HJ: Number,
   PV: Number,
   LJ: Number,
   TJ: Number,
   SP: Number,
   DT: Number,
});

// Exporting the finalized schemas
module.exports = mongoose.model("Marks", marksSchema);
