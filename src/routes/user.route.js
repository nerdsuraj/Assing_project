import express from 'express';
import * as userController from '../controllers/user.controller';
// import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
import { upload } from '../middlewares/image.middleware';
// const storage = require('../helper/storage');

// const multer = require('multer');

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, '/uplode')
//         },
//         filename: function (req, file, cb) {
//             cb(null, file.fieldname  + Date.now() + ".jpg")
//         }
//     })
// }).single('imagePath');

const router = express.Router();

//route to create a new user
router.post('/student',upload.single('imagePath'), userController.newUser);


//route to get all users
router.get('/student', userController.getAllUsers);









//route to get a single user by their user id
router.get('/:_id', userAuth, userController.getUser);

//route to update a single user by their user id
router.put('/:_id', userController.updateUser);

//route to delete a single user by their user id
router.delete('/:_id', userController.deleteUser);

export default router;
