const express = require('express');
const { registerUser, loginUser, getAccounts, getUsers, registerAccount } = require('../controllers/userController.js');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/accounts/:id/new-account', registerAccount);

router.get('/', getUsers);
router.get('/accounts/:id', getAccounts);


module.exports = router;
