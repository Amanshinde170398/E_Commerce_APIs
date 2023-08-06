const mongoose = require("mongoose");
require("dotenv").config();

const main = async () => {
  await mongoose.connect(process.env.MONGO_DB_URL);
};

main().catch((err) => console.log(err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connecting to DB"));

db.once("open", () => {
  console.log("Connected to DB successfuly");
});

module.exports = mongoose;
