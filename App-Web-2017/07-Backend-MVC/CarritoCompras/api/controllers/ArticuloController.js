//    localhost:1337/Articulo/metodos
module.exports = {
    eliminarArticulo: function (req, res) {
        var params = req.allParams();
        sails.log.info("Parametros", params);
        if (req.method == "POST" && params.id) {
            Articulo.destroy({
                id: params.id
            }).exec(function (err, articuloBorrado) {
                if (err)
                    return res.serverError(err);
                return res.redirect("/busqueda");
            });
        }
        else {
            return res.badRequest();
        }
    }
};
