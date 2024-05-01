import express from 'express';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { getAllCarsController } from '../controllers/carsController.js';

const router = express.Router();

router.get('/cars', isAuthenticated, getAllCarsController)

export default router;  