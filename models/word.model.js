const mongoose = require("mongoose");
const wordSchema = mongoose.Schema({
  word: { type: String, require: true },
});
const wordModel = mongoose.model("word", wordSchema);
module.exports = { wordModel };
