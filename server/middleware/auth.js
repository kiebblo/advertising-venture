const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.PRIVATE_KEY, (error, payload) => {
            if (error) {
                res.status(401).json("Unauthorized!")
            } else {
                req.payload = payload;
                next();
            }
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
};