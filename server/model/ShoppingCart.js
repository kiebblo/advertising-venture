const mongoose = require("mongoose");

const shoppingCartSchema = new mongoose.Schema({
    quantityPurchase: { type: Number, default: 1 },
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    idAdvertisement: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Advertisement",
        required: true
    }
},
    { timestamps: true }
);

const ShoppingCart = mongoose.model("ShoppingCart", shoppingCartSchema);
module.exports = ShoppingCart;