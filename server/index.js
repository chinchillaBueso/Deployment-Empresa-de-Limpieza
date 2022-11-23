//CONFIGURACION DE EXPRESS COMO SERVIDOR LOCAL 
//import express
const express= require('express');

//importar el nombre del sitio segun el entorno
const configs =require('./config')
//importar libreria paht para encontrar los archivos
const path= require('path')
//importando BODYPARSE
const body=require('body-parser')

const res = require('express/lib/response');
const routes = require('./routes');

//configurar express
const app = express();

//configuracion de la base de datos
//const db=require('./config/database')

//db.authenticate()
  //  .then(()=>console.log('Db conectada'))
    //.catch(error=> console.log(error))

require('dotenv').config({path:'variables.env'});
//habilitar pug 
app.set('view engine','pug');

//validar si estamos en desarrollo o en produccion
const config=configs[app.get('env')];

//creamos la variable de desarrollo
app.locals.titulo=config.nombresitio;

//cargar las el directorio public a node
app.use(express.static('public'))

//MUESTRA EL ANIO ACTUAL
app.use((req,res,next)=>{
    //crear nueva fecha
    const fecha = new Date();
    res.locals.fechaActual=fecha.getFullYear();
    res.locals.ruta=req.path;
    return next();//utilizacion de mi

})


//anadir las vistas
app.set('views',path.join(__dirname, './views'))

//ejecutar body-parse
app.use(body.urlencoded({extended:true}));

//cargar las rutas del routes/index.js
app.use('/',routes());



//puertos para la app
//TRABAJANDO CON EROCU
const host=process.env.HOST || '0.0.0.0';
const port=process.env.PORT || 2000;
app.listen(port,host,()=>{
  console.log('Servidor Funcionando')
})