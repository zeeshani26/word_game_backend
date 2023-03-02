const express = require("express");
const { wordModel } = require("../models/word.model");
const wordRouter = express.Router();

wordRouter.get("/getword", async (req, res) => {
  try {
    let data = await wordModel.find();
    let rIndex = Math.floor(Math.random() * data.length);
    let item = data[rIndex];
    res.send(item);
  } catch (err) {
    console.log(err);
    res.send({ msg: "Something went wrong in posting word" });
  }
});

wordRouter.post("/addword", async (req, res) => {
  const payload = req.body;
  try {
    const newWord = new wordModel(payload);
    await newWord.save();
    res.send({ msg: "Added Word successfully" });
  } catch (err) {
    console.log(err);
    res.send({ msg: "Something went wrong in posting word" });
  }
});

module.exports = { wordRouter };
