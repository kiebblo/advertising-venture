const cors = require("cors")
const express = require("express");
const app = express();
const UserRoute = require("./route/UserRoute");
const AdvertisementRoute = require("./route/AdvertisementRoute");
const ShoppingCartRoute = require("./route/ShoppingCartRoute");

require("dotenv").config();
require("./config/db");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", UserRoute);
app.use("/api/advertisement", AdvertisementRoute);
app.use("/api/shoppingCart", ShoppingCartRoute);
app.use("/uploads", express.static(__dirname + "/uploads"));

app.listen(process.env.PORT, () => console.log(`The server is running on port ${process.env.PORT}`));