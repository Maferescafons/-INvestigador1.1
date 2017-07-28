/**
 * Created by CEDIA on 24/07/2017.
 */
declare var module;
declare var sails;
declare var Articulo;

//    localhost:1337/Articulo/metodos

module.exports = {

  eliminarArticulo:(req,res)=>{

    let params = req.allParams();
    sails.log.info("Parametros",params);

    if(req.method=="POST"&&params.id){

      Articulo.destroy({
        id:params.id
      }).exec((err,articuloBorrado)=>{
        if(err) return res.serverError(err);
        return res.redirect("/busqueda")
      })

    }else{
      return res.badRequest();
    }


  }

};
