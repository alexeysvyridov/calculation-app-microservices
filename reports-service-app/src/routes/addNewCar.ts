import express, { Request } from 'express';
import { addNewCarController } from '../controllers/addNewCar.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';

const router = express.Router();

router.post('/newCar',isAuthenticated, addNewCarController);
export default router