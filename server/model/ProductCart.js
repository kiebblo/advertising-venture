const mongoose = require("mongoose");

const productCartSchema = new mongoose.Schema({
    quantityPurchase: { type: Number, default: 1 },
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    idAdvertisemet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},
    {
        timestamps: true
    }
);

const ProductCart = mongoose.Model("ProductCart", productCartSchema);
module.exports = ProductCart;