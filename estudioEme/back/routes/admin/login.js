var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuariosModels');

/*GET home page */
router.get('/', function (res, req, next) {
    res.render('admin/login', {
        layout: 'admin/layout'
    });
});

router.get('/logout', function (req, res, next) {
  req.session.destroy(); 
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});


/*POST home page */
router.post('/', async (req, res, next) => {
    try {
      var usuario = req.body.usuario; 
      var password = req.body.password;
  
      var data = await usuariosModel.getUser(usuario, password); 
  
      if (data != undefined) { 
  
        req.session.id_usuario = data.id;
        req.session.nombre = data.usuario;

        res.redirect('/admin/clientes')
      } else {
        res.render('admin/login', {
          layout: 'admin/layout',
          error: true
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
  
module.exports = router;