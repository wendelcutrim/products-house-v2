const db = require('../database/db.json');

const HomeController = {
    showHome: (req, res) => {
        const url = req.originalUrl;
        const products = db.products;

        return res.render('admin/home', {url, products});
    },

    showCadastrar: (req, res) => {
        const url = req.originalUrl;
        
        return res.render('admin/products/cadastrar', {url});
    },

    showEditar: (req, res) => {
        const url = req.originalUrl;
        
        return res.render('admin/products/editar', {url});
    },

    showDashboard: (req, res) => {
        const url = req.originalUrl;
        
        return res.render('admin/dashboard', {url});
    },

    showLogin: (req, res) => {
        const url = req.originalUrl;
        
        return res.render('admin/auth/login', {url});
    }
}

module.exports = HomeController;