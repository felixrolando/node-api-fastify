const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/fastifycrud")
  .then(() => console.log("Mongodb conencted"))
  .catch((err) => console.log(err));
