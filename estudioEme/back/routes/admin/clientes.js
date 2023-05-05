var express = require('express');
var router = express.Router();
var clientesModel = require('../../models/clientesModel');

/* GET homepage */
router.get('/', async function (req, res, next) {
    var clientes = await clientesModel.getClientes();
    res.render('admin/clientes', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        clientes
    });
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
});

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;
    await clientesModel.deleteClienteById(id);
    res.redirect('/admin/clientes')
});

router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    var cliente = await clientesModel.getClienteById(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        cliente
    });
});

/* POST homepage */
router.post('/agregar', async (req, res, next) => {
    try {
        if (req.body.nomApellido != "" && req.body.nroCuit != "" && req.body.claveAfip != "" && req.body.claveArba != "" && req.body.claveMuni != "" && req.body.clavePami != "" && req.body.email != "" && req.body.agremiacion != "" && req.body.fechaIngreso != "") {
            await clientesModel.insertCliente(req.body);
            res.redirect('/admin/clientes')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se cargó el cliente'
        });
    }
});

router.post('/modificar', async (req, res, next) => {
    try {
        let obj = {
            nomApellido: req.body.nomApellido,
            nroCuit: req.body.nroCuit,
            claveAfip: req.body.claveAfip,
            claveArba: req.body.claveArba,
            claveMuni: req.body.claveMuni,
            clavePami: req.body.clavePami,
            email: req.body.email,
            agremiacion: req.body.agremiacion,
            fechaIngreso: req.body.fechaIngreso
        }
        
        await clientesModel.modificarClienteById(obj, req.body.id);
        res.redirect('/admin/clientes');

    } catch (error) {
        console.log(error)
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se pudo modificar el cliente'
        });
    }
});

module.exports = router;