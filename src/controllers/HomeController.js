const db = require('../database/db.json');

const HomeController = {
    getHome: (req, res) => {
        return res.render('home/index', {products: db.products});
    },
    
    getLogin: (req, res) => {
        return res.render('home/auth/login');
    },

    getRegister: (req, res) => {
        return res.render('home/auth/cadastro');
    },

    getProduct: (req, res) => {
        const { id } = req.params;
        const product = db.products.find(product => product.id === id);

        return res.render('home/produto', {product});
    }
}

module.exports = HomeController;