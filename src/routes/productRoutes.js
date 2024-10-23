const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { verifyAdmin } = require('../middlewares/authMiddleware');

// Routes for products
router.post('/products', verifyAdmin, productController.createProduct);
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.put('/products/:id', verifyAdmin, productController.updateProduct);
router.delete('/products/:id', verifyAdmin, productController.deleteProduct);







module.exports = router;
