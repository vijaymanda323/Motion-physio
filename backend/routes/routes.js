const express = require('express');
const router = express.Router();
const { createUser, loginUser } = require('../Controller/Controller');

// User routes
router.post('/users/register', createUser);
router.post('/users/login', loginUser);

module.exports = router;

