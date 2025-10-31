const express = require('express');
const Payment = require('../models/Payment');
const Bill = require('../models/Bill');
const auth = require('../middleware/auth');

const router = express.Router();

// Get payments for a customer
router.get('/customer/:customerId', auth, async (req, res) => {
  try {
    const payments = await Payment.find({ customerId: req.params.customerId });
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create payment
router.post('/', auth, async (req, res) => {
  try {
    const { billId, amount, paymentMethod } = req.body;

    const payment = new Payment({
      customerId: req.user.id,
      billId,
      amount,
      paymentMethod: paymentMethod || 'online'
    });

    await payment.save();

    // Update bill status if payment is successful
    if (billId) {
      await Bill.findByIdAndUpdate(billId, { status: 'paid' });
    }

    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all payments (admin)
router.get('/', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const payments = await Payment.find().populate('customerId', 'username name');
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
