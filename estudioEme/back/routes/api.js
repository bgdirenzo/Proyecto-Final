var express = require('express');
var router = express.Router();
var clientesModel = require('../models/clientesModel');
var nodemailer = require('nodemailer');

/*GET Home Page*/
router.get('/clientes', async function (req, res, next) {
    var clientes = await clientesModel.getClientes();

    res.json(clientes);
});

/*POST Home Page*/
router.post('/contacto', async (req,res)=> {
    const mail = {
      to: 'barbara.direnzo@gba.gob.ar',
      subject: 'Contacto a EME',
      html: `<strong>${req.body.nombre}</strong> se contactó a través de la web y quiere más información al correo: <u>${req.body.email}</u>
            <br/> Además, deja el siguiente mensaje: 
            <br/> - ${req.body.mensaje}`
    }
  
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  
    await transport.sendMail(mail)
  
    res.status(201).json({
      error: false,
      message: 'Mensaje enviado'
    });
  
  });

module.exports = router;