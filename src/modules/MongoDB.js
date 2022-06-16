const mongoose = require("mongoose");
const fs = require("fs");

function initMongoDB() {
  console.log("Initializing MongoDB...");
  const mongoDB = process.env.MONGODB_URI;
  mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
    // Load models from dir models
    fs.readdirSync("./src/models").forEach((file) => {
      require(`../models/${file}`);
      console.log(`Model ${file} loaded.`);
    });
  });
  mongoose.connection.on("error", (err) => {
    console.log(err);
  });
}

module.exports = {
  initMongoDB,
};
