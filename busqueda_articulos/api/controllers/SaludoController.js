/**
 * Created by USRDEL on 19/6/17.
 */
// /Saludo/crearUsuarioQuemado
module.exports = {
    welcome: function (req, res) {
        sails.log.info(req.method);
        if (req.method == "POST") {
            return res.json({ saludo: "hola" });
        }
        else {
            return res.send("Error");
        }
    },
    bienvenido: function (req, res) {
        //PUT
        return res.send("Hola");
    },
    crearUsuarioQuemado: function (req, res) {
        var parametros = req.allParams();
        //  Ejemplo para crear por parametros query
        // http://localhost:1337/Saludo/crearUsuarioQuemado?nombres=Vicente&fechaNacimiento=2016-01-02
        var nuevoUsuario = {
            nombres: parametros.nombres,
            apellidos: parametros.apellidos,
            password: parametros.password,
            correo: parametros.correo,
            fechaNacimiento: parametros.fechaNacimiento
        };
        // 1 - Query Parameters ?nombre=Adrian&apellidos=Eguez
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
        Usuario.create(nuevoUsuario)
            .exec(function (error, usuarioCreado) {
            if (error) {
                return res.serverError(error);
            }
            else {
                return res.ok(usuarioCreado);
            }
        });
    }
};
