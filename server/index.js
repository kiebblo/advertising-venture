const express = require("express");
const app = express();

require("dotenv").config();
require("./config/db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const UserRoute = require("./route/UserRoute");
app.use("/api/user", UserRoute);

const AdvertisementController = require("./route/AdvertisementRoute");
app.use("/api/advertisement", AdvertisementController)



app.use("/uploads", express.static(__dirname + "/uploads"))
app.listen(process.env.PORT, () => console.log(`The server is running on port ${process.env.PORT}`));