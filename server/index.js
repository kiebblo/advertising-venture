const cors = require("cors")
const express = require("express");
const app = express();
const UserRoute = require("./route/UserRoute");
const AdvertisementController = require("./route/AdvertisementRoute");
const ShoppingCartController = require("./route/ShoppingCartRoute");

require("dotenv").config();
require("./config/db");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", UserRoute);
app.use("/api/advertisement", AdvertisementController);
app.use("/api/shoppingCart", ShoppingCartController);
app.use("/uploads", express.static(__dirname + "/uploads"));
app.listen(process.env.PORT, () => console.log(`The server is running on port ${process.env.PORT}`));