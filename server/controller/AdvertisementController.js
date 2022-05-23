const Advertisement = require("../model/Advertisement");
const filesystem = require("fs/promises");

exports.createAdvertisement = async (req, res) => {
    try {
        req.body.idUser = req.payload.id;
        req.body.photo = `uploads/${req.file.filename}`;
        let advertisement = Advertisement.create(req.body);
        res.status(201).json(advertisement);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

exports.getAdvertisements = async (req, res) => {
    try {
        let advertisements = await Advertisement.find().sort({ price: -1 });
        res.json(advertisements);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

exports.getAdvertisementsById = async (req, res) => {
    try {
        let advertisement = await Advertisement.findById(req.params.id);
        if (!advertisement) {
            return res.status(404).json("This advertisement does not exist!");
        }
        res.json(advertisement);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

exports.getAdvertisementsByUser = async (req, res) => {
    try {
        let advertisement = await Advertisement.find().where("idClient").equals(req.payload.id);
        res.json(advertisement);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

exports.deleteAdvertisement = async (req, res) => {
    try {
        let advertisement = await Advertisement.findById(req.params.id);
        if (!advertisement) {
            return res.status(404).json("This advertisement does not exist!");
        }
        if (advertisement.idClient != req.payload.id) {
            return res.status(401).json("You dont have the permissions to delete this advertisement")
        }
        await advertisement.remove();
        await filesystem.unlink(advertisement.photo);
        res.json(advertisement);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

exports.updateAdvertisement = async (req, res) => {
    try {
        let advertisement = await Advertisement.findById(req.params.id);
        if (!advertisement) {
            return res.status(404).json("This advertisement does not exist!");
        }
        if (advertisement.idClient != req.payload.id) {
            return res.status(401).json("You dont have the permissions to update this advertisement")
        }
        if (req.file) {
            await filesystem.unlink(advertisement.photo);
            advertisement.photo = `uploads/${req.file.filename}`;
        }
        advertisement.productName = req.body.productName;
        advertisement.description = req.body.description;
        advertisement.price = req.body.price;
        advertisement.quantityAvailable = req.body.quantityAvailable;
        await advertisement.save();
        res.json(advertisement);
    } catch (error) {
        res.status(500).json(error.message);
    }
};