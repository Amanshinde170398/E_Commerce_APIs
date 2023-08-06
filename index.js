const express = require("express");
const db = require("./config/mongoose");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use("/", require("./routes"));

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`Server is up & running on PORT: ${PORT}`);
});
