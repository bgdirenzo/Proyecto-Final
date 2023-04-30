var express = require('express');
var router = express.Router();

router.get('/', function (res, req, next) {
    res.render('admin/clientes', {
        layout: 'admin/layout',
        usuario: req.session.nombre
    });
});

module.exports = router;