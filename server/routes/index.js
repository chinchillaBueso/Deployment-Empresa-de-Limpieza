//iniciar expres
const express=require('express');
const { render } = require('express/lib/response');

//inportar clase para controlar las rutas
const router = express.Router();

//importar controladores de nuestra app
const nosotrosController =require('../controllers/nosotrosControllers');
const paquetesController=require('../controllers/paquetesController');
const experienciasController=require('../controllers/experienciasController')
const contactanosController=require('../controllers/contactanosController')
const indexControllers=require('../controllers/indexController');
//declarando modulo exportable de router
module.exports = function(){
    router.get('/',indexControllers.InfoIndex);

    router.get('/nosotros',nosotrosController.infoNosotros);

    router.get('/paquetes',paquetesController.infopaquetes);

    router.get('/paquetes/:id',paquetesController.idpaquete);

    router.get('/experiencias',experienciasController.infoExperiencias);
    
    router.post('/experiencias',experienciasController.infoTestimonios);
    
    router.get('/contactanos',contactanosController.infoContactanos);

    return router
}