const mongoose = require("mongoose");

// Describing the structure (schema) of the data to be stored
const PostSchema = new mongoose.Schema({
   id: Number,
   one: Number,
   two: Number,
   four: Number,
   s_hurdles: Number,
   l_hurdles: Number,
   o_relay: Number,
   f_relay: Number,
   eight: Number,
   sixteen: Number,
   thirty_two: Number,
});

// Exporting the finalized schemas
module.exports = mongoose.model("Post", PostSchema);
