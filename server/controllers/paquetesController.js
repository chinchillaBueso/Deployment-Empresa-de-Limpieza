//importar modelo
const Paquete=require('../models/Paquetes')

exports.infopaquetes=async (req,res)=>{
    const paquetes =await Paquete.findAll()
    res.render('paquetes',{
            pagina:'Paquetes',
            paquetes
        });
}

exports.idpaquete=async (req,res)=>{
    const paquete= await Paquete.findByPk(req.params.id)
    res.render('paquete',{
            pagina:'Paquete',
            paquete
        })
        
}
