// /Saludo/crearUsuarioQuemado
module.exports = {
    crearArticuloQuemado: function (req, res) {
        var parametros = req.allParams();
        //  Ejemplo para crear por parametros query
        // http://localhost:1337/Saludo/crearUsuarioQuemado?nombres=Vicente&fechaNacimiento=2016-01-02
        var nuevoArticulo = {
            country: parametros.country,
            number: parametros.number,
            title: parametros.title,
            volume: parametros.volume,
            year: parametros.year,
            abstract: parametros.abstract
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
            .exec(function (error, articuloCreado) {
            if (error) {
                return res.serverError(error);
            }
            else {
                return res.ok(articuloCreado);
            }
        });
    },
    Busqueda: function (req, res) {
        Articulo.find().exec(function (err, articulos) {
            if (err)
                return res.negotiate(err);
            sails.log.info("Articulo", articulos);
            return res.view('bilioteca', {
                articulos: articulos
            });
        });
    },
    biblioteca: function (req, res) {
        Articulo.find().exec(function (err, articulos) {
            if (err)
                return res.negotiate(err);
            sails.log.info("articulo", articulos);
            return res.view('busqueda', {
                articulos: articulos
            });
        });
    },
    crearUsuario: function (req, res) {
        return res.view('busqueda');
    }
};
