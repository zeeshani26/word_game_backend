const express = require("express");
const app = express();
const cors = require("cors");
const { wordRouter } = require("./routes/words.routes");
const { connection } = require("./config/db");
const { scoreRouter } = require("./routes/scores.routes");

app.use(cors());
app.use(express.json());
app.use("/word", wordRouter);
app.use("/score", scoreRouter);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Server has been started on 8080");
  } catch (err) {
    console.log(err);
  }
});
