import express from 'express';
import { protect, admin } from '../../Middleware/AuthMiddleware.js';
import UserController from './UserController.js';

const router = express.Router();

router.post('/login', UserController.login); // LOGIN
router.post('/', UserController.createUser); // REGISTER
router.get('/profile', protect, UserController.getUserById); // PROFILE
router.put('/profile', protect, UserController.updateUserById); // UPDATE PROFILE
router.get('/', protect, admin, UserController.getAllUsers); // ADMIN GET ALL USERS
router.get('/stats', protect, UserController.getUserStatistics); //ADMIN GET USER STATS

export default router;
