const  authMiddleware = require('../middlewares/authMiddleware');
const verifyAdmin  = require('../middlewares/verifyAdminMiddleware');

router.post('/orders', authMiddleware, orderController.createOrder);
router.get('/orders', authMiddleware,verifyAdmin, orderController.getAllOrders);
router.get('/orders/:id', authMiddleware, orderController.getOrderById);
router.put('/orders/:id/pay', authMiddleware, orderController.updateOrderToPaid);
router.put('/orders/:id/deliver', authMiddleware,verifyAdmin, orderController.updateOrderToDelivered);
router.delete('/orders/:id', authMiddleware,verifyAdmin, orderController.deleteOrder);
