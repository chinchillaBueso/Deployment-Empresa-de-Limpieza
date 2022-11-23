const Testimonial=require('../models/Testimoniales')

exports.infoTestimonios=async(req,res)=>{
    //validacion
    let{nombre,correo,mensaje}=req.body;
   
    let errores=[];
    if(nombre==''){
        errores.push({'mensaje':'Agrega tu nombre'})
    }
    if(correo==""){
        errores.push({'mensaje':'Agrega tu correo'})
    }
    if(mensaje==""){
        errores.push({'mensaje':'Agrega tu mensaje'})
    }

    //revisar por errores
    var tam=0
    tam=errores.length
    if(tam > 0){
        const testimoniales= await Testimonial.findAll()
        res.render('experiencias',{
            errores,
            nombre,
            correo,
            mensaje,
            pagina:"Testimonios de nuestros Clientes!",
            testimoniales
        })
    }else{
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
         res.redirect('/experiencias')
    }
}

exports.infoExperiencias=async(req,res)=>{
    const testimoniales= await Testimonial.findAll()
        res.render('experiencias',{
            pagina:"Testimonios de nuestros Clientes!",
            testimoniales
        })
}