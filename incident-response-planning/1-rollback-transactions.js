const db = require('mongoose');

const transaction = db.startTransaction();

try {
  // Perform updates
  await transaction.commit();
} catch (err) {
  await transaction.rollback();
}
