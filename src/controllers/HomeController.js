const db = require('../database/db.json');

const HomeConroller = {
    getHome: (req, res) => {
        return res.render('home/index', {products: db.products});
    },

    getLogin: (req, res) => {
        return res.render('home/auth/login');
    },

    getRegister: (req, res) => {
        return res.render('home/auth/cadastro');
    },
}

module.exports = HomeConroller;