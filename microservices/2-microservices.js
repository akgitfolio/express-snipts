// order.js
const express = require('express');
const router = express.Router();

router.get('/orders', (req, res) => {
  const orders = [{ id: 1, user_id: 1, product_id: 1 }, { id: 2, user_id: 2, product_id: 2 }];
  res.json(orders);
});

module.exports = router;
