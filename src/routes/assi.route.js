import express from 'express';
import * as assin from "../controllers/assi.controller";
import { newPeopleValidator } from '../validators/assin.validator';





const router = express.Router();


router.post('/people',newPeopleValidator, assin.newUser);

router.get('/people', assin.getAllUsers);

router.put('/people/:_id', assin.updatePeople);

export default router;
