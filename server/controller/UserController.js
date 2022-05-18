const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

exports.login = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await User.findOne().where("email").equals(email);
        if (!user) {
            return res.status(404).json("Email does not exist");
        }
        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            return res.status(404).json("Password incorrect");
        }
        const token = jwt.sign({ id: user._id }, process.env.PRIVATE_KEY);
        res.json(token);
    } catch (error) {
        res.status(500).json(error.message);
    }
};