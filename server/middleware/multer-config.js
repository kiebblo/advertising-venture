const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: "./uploads/", 
    filename: function(req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

function checkFileType(file, cb){
    const filetypesImage = /jpeg|jpg|png|gif/; 
    const extname = filetypesImage.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypesImage.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb("Error: Images Only!")
    }
};

const upload = multer({ 
    storage, 
    fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
    },
}).single("file");

module.exports = upload;