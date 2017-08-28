/**
 * Created by CEDIA on 24/07/2017.
 *
 */
declare var module;
declare var sails;
declare var Articulo;

// /Saludo/crearUsuarioQuemado

module.exports = {
  crearArticuloQuemado: (req, res) => {

    let parametros = req.allParams();


    //  Ejemplo para crear por parametros query

    // http://localhost:1337/Saludo/crearUsuarioQuemado?nombres=Vicente&fechaNacimiento=2016-01-02


    let nuevoArticulo = {


      country: parametros.country,
      number: parametros.number,
      title: parametros.title,
      volume: parametros.volume,
      year: parametros. year,
      abstract: parametros.abstract,
      issns:parametros.issns,
      language:parametros.language,
      keywords:parametros.keywords,
      link:parametros.link,
      author:parametros.author


    };



    // 2 - Forms Parameters


    /*let nuevoUsuario = {
     nombre:"Fernanda",
     apellidos:"Escobar",
     password:"1234",
     correo:"hola@1.com",
     fechaNacimiento:new Date()
     };
     */

    // NombreModelo.metodo(parametros).exec((err,registros)=>{})


    Articulo.create(nuevoArticulo)
      .exec(
        (error,articuloCreado)=>{
          if(error){
            return res.serverError(error);
          }else{
            return res.ok(articuloCreado);
          }
        }
      )

  },
  Busqueda:(req,res)=>{

    Articulo.find().exec((err,articulos)=>{
      if(err) return res.negotiate(err);
      sails.log.info("Articulo",articulos);

      return res.view('bilioteca',{
        articulos:articulos
      })
    })
  },
  biblioteca:(req,res)=>{

    Articulo.find().exec((err,articulos)=>{
      if(err) return res.negotiate(err);
      sails.log.info("articulo",articulos);

      return res.view('busqueda',{
        articulos:articulos
      })
    })
  },
  crearUsuario:(req,res)=>{
    return res.view('busqueda')
  }

}
