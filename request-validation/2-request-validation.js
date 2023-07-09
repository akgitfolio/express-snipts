const bodySchema = {
  address: {
    street: { type: 'string' },
    city: { type: 'string' }
  }
};

app.post('/address', [
  check('address.street').isString(),
  check('address.city').isString()
], (req, res) => { });
