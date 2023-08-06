const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
};

main().catch((err) => console.log(err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connecting to DB"));

db.once("open", () => {
  console.log("Connected to DB successfuly");
});

module.exports = mongoose;
