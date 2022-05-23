const mongoose = require("mongoose");

const advertisementSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    description: { type: String, require: true },
    price: { type: Number, required: true },
    quantityAvailable: { type: Number, required: true },
    photo: { type: String, required: true },
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},
    { timestamps: true }
);

const Advertisement = mongoose.model("Advertisement", advertisementSchema);
module.exports = Advertisement;