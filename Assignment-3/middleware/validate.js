const mongoose = require('mongoose');

// Rejects malformed ObjectIds before they hit the database
const validateId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: 'Invalid product ID' });
  }
  next();
};

// Body for PATCH /:id/stock must be { change: <non-zero integer> }
const validateStockChange = (req, res, next) => {
  const { change } = req.body;
  if (typeof change !== 'number' || !Number.isInteger(change) || change === 0) {
    return res.status(400).json({ error: '"change" must be a non-zero integer (positive = restock, negative = sale)' });
  }
  next();
};

module.exports = { validateId, validateStockChange };
