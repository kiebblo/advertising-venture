const mongoose = require("mongoose");

module.exports = mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Successful db connection."))
    .catch((error) => console.log(error.message));