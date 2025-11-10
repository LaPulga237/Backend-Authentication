const express = require('express');                   
const router = express.Router();                       
const authController = require('../controllers/authController'); 


router.post('/v1/api/auth/register', authController.register);


router.post('/v1/api/auth/login', authController.login);


router.get('/v1/api/users', authController.getUsers);

module.exports = router;                            