const Testimonial=require('../models/Testimoniales')
const Paquete=require('../models/Paquetes')

exports.InfoIndex=async(req,res)=>{
    const paquetes=await Paquete.findAll({
        limit:3
    })
    
    const testimoniales= await Testimonial.findAll({
        limit: 3
    })
    

    res.render('index',{
        pagina:"Paquetes para tus necesidades",
        paquetes,
        testimoniales,
        clase:"home"
 
    })
}
