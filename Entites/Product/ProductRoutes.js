import express from 'express';
import { protect, admin } from '../../Middleware/AuthMiddleware.js';
import ProductController from './ProductController.js';

const router = express.Router();

router.get('/', ProductController.getProducts); // ADMIN GET ALL PRODUCTS
router.get('/all', protect, admin, ProductController.getAllProducts); // ADMIN GET ALL PRODUCTS WITHOUT SEARCH AND PAGINATION
router.post('/', protect, admin, ProductController.createProduct); // ADMIN CREATE PRODUCT
router.delete('/:id', protect, admin, ProductController.deleteProduct); // ADMIN DELETE PRODUCT
router.put('/:id', protect, admin, ProductController.updateProduct); // ADMIN EDIT PRODUCT
router.get('/:id', ProductController.getProductById); // GET SINGLE PRODUCT
router.post('/:id/review', protect, ProductController.createReviewByProduct); // PRODUCT REVIEW

export default router;
