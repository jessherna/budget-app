import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext'; // Assuming you have a UserContext

const AddTransaction = () => {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [account, setAccount] = useState('');
    const { user } = useContext(UserContext); // Get the logged-in user from context

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/transactions', { amount, description, date, category, account, user: user.id });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" />
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
            <input type="date" value={date} onChange={e => setDate(e.target.value)} placeholder="Date" />
            <input type="text" value={category} onChange={e => setCategory(e.target.value)} placeholder="Category" />
            <input type="text" value={account} onChange={e => setAccount(e.target.value)} placeholder="Account" />
            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default AddTransaction;
