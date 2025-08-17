const express =  require('express');
const authControllers= require('../controllers/authControllers');
const router = express.Router();

//create a user
router.post('/admin-login',authControllers.admin_login)

module.exports = router