const ShoppingCart = require("../model/ShoppingCart");
const Advertisement = require("../model/Advertisement");

exports.addProductToShoppingCart = async (req, res) => {
    try {
        req.body.idClient = req.payload.id;
        let advertisement = await Advertisement.findById(req.body.Advertisement);

        if (advertisement.quantityAvailable < req.body.quantityPurchase || req.body.quantityPurchase <= 0) {
            return res.status(404).json("This quantity its invalid!");
        }

        let product = await ShoppingCart.create(req.body);
        product = await product.pupolate("idAdvertisement");
        res.status(201).json(product);

    } catch (error) {
        res.status(500).json(error.message);
    }
};

exports.getUsersShoppingCart = async (req, res) => {
    try {
        let products = await ShoppingCart.find().where("idUser").equals(req.payload.id).populate("idAdvertisement");
        res.json(products);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

exports.deleteProductFromShoppingCart = async (req, res) => {
    try {
        let product = await ProductCart.findById(req.params.id);
        if (!product) {
            return res.status(404).json("This product does not exist!");
        }
        if (product.idClient != req.payload.id) {
            return res.status(401).json("You dont have the permissions to delete this product")
        }
        await product.remove();
        res.json(product);
    } catch (error) {
        res.status(500).json(error.message);
    }
};