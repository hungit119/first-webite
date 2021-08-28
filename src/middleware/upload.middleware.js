const multer = require('multer')
const upload = multer({
    limits:{
        fileSize:10 * 1240 * 1240,
    }
});
module.exports = upload