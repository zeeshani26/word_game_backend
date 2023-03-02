const express = require("express");
const { scoreModel } = require("../models/scores.model");
const scoreRouter = express.Router();

scoreRouter.get("/getscore", async (req, res) => {
  try {
    let data = await scoreModel.find().sort("score:0");
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send({ msg: "Something went wrong in posting word" });
  }
});

scoreRouter.post("/addscore", async (req, res) => {
  const payload = req.body;
  try {
    const newScore = new scoreModel(payload);
    await newScore.save();
    res.send({ msg: "Added Score successfully" });
  } catch (err) {
    console.log(err);
    res.send({ msg: "Something went wrong in posting score" });
  }
});

module.exports = { scoreRouter };
