const express = require('express');
const { login } = require('../controllers/auth/login');
const { signup } = require('../controllers/auth/registration');
const { getroles } = require('../controllers/auth/users');
const { verifyemail } = require('../controllers/auth/verification');
const router = express.Router();


router.post('/register', signup);
router.get('/verifyaccount', verifyemail);
router.post('/login', login)
router.get('/roles', getroles);

module.exports = router