import express from 'express';
import OrderController from './OrderController.js';
import { admin, protect } from '../../Middleware/AuthMiddleware.js';

const router = express.Router();

router.post('/', protect, OrderController.createOrder); // CREATE ORDER
router.get('/all', protect, admin, OrderController.getOrders); // ADMIN GET ALL ORDERS
router.get('/', protect, OrderController.getOrdersByUser); // USER LOGIN ORDERS
router.get('/:id', protect, OrderController.getOrderById); // GET ORDER BY ID
router.put('/:id/pay', protect, OrderController.isPaid); // ORDER IS PAID
router.put('/:id/delivered', protect, OrderController.isDelivered); // ORDER IS DELIVERED

export default router;
