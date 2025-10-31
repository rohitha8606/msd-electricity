const express = require('express');
const Bill = require('../models/Bill');
const auth = require('../middleware/auth');

const router = express.Router();

// Get bills for a customer
router.get('/customer/:customerId', auth, async (req, res) => {
  try {
    const bills = await Bill.find({ customerId: req.params.customerId });
    res.json(bills);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create bill (admin only)
router.post('/', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const { customerId, customerName, amount, dueDate, serviceNumber } = req.body;

    const bill = new Bill({
      customerId,
      customerName,
      amount,
      dueDate,
      serviceNumber
    });

    await bill.save();
    res.status(201).json(bill);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update bill status
router.put('/:id', auth, async (req, res) => {
  try {
    const bill = await Bill.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(bill);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single bill by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);
    if (!bill) {
      return res.status(404).json({ message: 'Bill not found' });
    }
    res.json(bill);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all bills (admin)
router.get('/', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const bills = await Bill.find().populate('customerId', 'username name');
    res.json(bills);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
