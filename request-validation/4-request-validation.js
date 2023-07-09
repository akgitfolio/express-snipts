app.post('/order', [
  check('quantity').isInt({ min: 1 }).withMessage('Quantity must be greater than 0'),
  check('product_id').exists().withMessage('Product ID is required')
  // Only run this check if quantity is more than 10
  .custom(value => {
    if (value > 10) {
      throw new Error('Quantity cannot exceed 10 for this product');
    }
  })
], (req, res) => { });
