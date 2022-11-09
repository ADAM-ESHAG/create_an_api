const multer = require('multer'); // Import Multer

//---Preperation of a dictionary MIME_TYPES
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

//---Creation of an object of configuration for multer
const storage = multer.diskStorage({
    //---The function will take's tow arguments (destination and filename)
    destination: (req, file, callback) => {
        callback(null, 'images');
    },

    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

//---Export Multer
module.exports = multer({ storage }).single('image');