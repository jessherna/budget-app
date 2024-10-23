const Bill = require('../models/Bill');

// Get all bills
exports.getAllBills = async (req, res) => {
    try {
        const bills = await Bill.find();
        res.status(200).json(bills);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single bill by ID
exports.getBillById = async (req, res) => {
    try {
        const bill = await Bill.findById(req.params.id);
        if (!bill) return res.status(404).json({ message: 'Bill not found' });
        res.status(200).json(bill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new bill
exports.createBill = async (req, res) => {
    const bill = new Bill(req.body);
    try {
        const newBill = await bill.save();
        res.status(201).json(newBill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an existing bill
exports.updateBill = async (req, res) => {
    try {
        const updatedBill = await Bill.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBill) return res.status(404).json({ message: 'Bill not found' });
        res.status(200).json(updatedBill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a bill
exports.deleteBill = async (req, res) => {
    try {
        const deletedBill = await Bill.findByIdAndDelete(req.params.id);
        if (!deletedBill) return res.status(404).json({ message: 'Bill not found' });
        res.status(200).json({ message: 'Bill deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};