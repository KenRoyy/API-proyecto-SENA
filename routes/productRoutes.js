import express from 'express';
import { createProdut, deleteProduct, getAllProducts, getProductById, updateProduct } from '../controllers/productController.js';

const router = express.Router();

router.post('/', createProdut)
router.get('/',getAllProducts)
router.get('/:id', getProductById)
router.put('/:id', updateProduct)
router.delete('/:id',deleteProduct)

export default router;