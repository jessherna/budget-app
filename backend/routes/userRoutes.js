const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { getAllUsers, getUserById, registerUser, updateUser, deleteUser } = require('../controllers/userController');

// Route to get all users
router.get('/', asyncHandler(getAllUsers));

// Route to get a single user by ID
router.get('/:id', asyncHandler(getUserById));

// Route to create a new user
router.post('/', asyncHandler(registerUser));

// Route to update an existing user by ID
router.put('/:id', asyncHandler(updateUser));

// Route to delete a user by ID
router.delete('/:id', asyncHandler(deleteUser));

module.exports = router;