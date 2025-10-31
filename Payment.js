const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  billId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bill' },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['successful', 'failed', 'pending'], default: 'successful' },
  paymentMethod: { type: String, default: 'online' }
});

module.exports = mongoose.model('Payment', paymentSchema);
