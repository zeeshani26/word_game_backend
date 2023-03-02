const mongoose = require("mongoose");
const scoreSchema = mongoose.Schema({
  name: { type: String, require: true },
  diff: { type: String, require: true },
  score: { type: Number, require: true },
});
const scoreModel = mongoose.model("score", scoreSchema);
module.exports = { scoreModel };
