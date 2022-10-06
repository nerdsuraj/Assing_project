import express from 'express';
// const app = express();
// var path = require('path');
// app.use('/uplode',express.static(path.join('uplode')))

import multer from 'multer';

var imageStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uplode');
     },
    filename: function (req, file, cb) {
        cb(null ,file.originalname);
    }
});

export var upload = multer({ storage: imageStorage });