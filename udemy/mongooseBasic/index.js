const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017/movieApp")
  .then(() => {
    console.log("CONNECTION OPEN");
  })
  .catch((error) => {
    console.log("ERROR : ", error);
  });
