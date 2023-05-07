var express = require('express');
var router = express.Router();
var clientesModel = require('../models/clientesModel');

router.get('/clientes', async function (req, res, next) {
    var clientes = await clientesModel.getClientes();

    res.json(clientes);
});

module.exports = router;