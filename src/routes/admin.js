const express = require('express');
const AdminController = require('../controllers/AdminController');

const router = express.Router();

router.get('/', AdminController.showHome);
router.get('/produtos/cadastrar', AdminController.showCadastrar);
router.get('/produtos/editar', AdminController.showEditar);
router.get('/dashboard', AdminController.showDashboard);
router.get('/login', AdminController.showLogin);

module.exports = router;