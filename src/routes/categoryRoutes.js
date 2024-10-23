const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { verifyAdmin } = require('../middlewares/authMiddleware');

// Routes for categories
router.post('/categories', verifyAdmin, categoryController.createCategory);
router.get('/categories', categoryController.getAllCategories);
router.get('/categories/:id', categoryController.getCategoryById);
router.put('/categories/:id', verifyAdmin, categoryController.updateCategory);
router.delete('/categories/:id', verifyAdmin, categoryController.deleteCategory);


module.exports = router;
