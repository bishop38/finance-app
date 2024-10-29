const Transaction= require('../models/Transaction');

exports.createTransaction = async (req, res) => {
    const { amount, category, type } = req.body;
    try {
        const transaction = new Transaction({
            userId: req.user.userId,
            amount,
            category,
            type
        });
        await transaction.save();
        res.status(201).json(transaction);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ userId: req.user.userId });
        res.json(transactions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};