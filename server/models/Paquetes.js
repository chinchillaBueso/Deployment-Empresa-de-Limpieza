const { Sequelize, STRING } = require('sequelize');
const Siquelize = require('sequelize');

const db=require('../config/database');

const Paquete =db.define("paquete",{
    nombre:{
        type: Sequelize.STRING
    },
    precio:{
        type:Sequelize.STRING
    },
    clase:{
        type:Sequelize.STRING
    },
    imagen:{
        type:Sequelize.STRING
    },
    descripcion:{
        type:Sequelize.STRING
    },

})

module.exports= Paquete