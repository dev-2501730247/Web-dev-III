const express = require('express');
const c = require('../controllers/productController');
const { validateId, validateStockChange } = require('../middleware/validate');

const router = express.Router();

// Static routes FIRST, otherwise Express treats "low-stock" / "summary" as an :id
router.get('/low-stock', c.getLowStock);
router.get('/summary', c.getCategorySummary);

router.route('/').get(c.getProducts).post(c.createProduct);

router.patch('/:id/stock', validateId, validateStockChange, c.adjustStock);

router
  .route('/:id')
  .get(validateId, c.getProductById)
  .put(validateId, c.updateProduct)
  .delete(validateId, c.deleteProduct);

module.exports = router;
