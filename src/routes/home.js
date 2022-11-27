const express = require('express');
const HomeController = require('../controllers/HomeController');

const router = express.Router();

router.get('/', HomeController.getHome);
router.get('/login', HomeController.getLogin);
router.get('/cadastro', HomeController.getRegister);
router.get('/products/:id', HomeController.getProduct);

module.exports = router;