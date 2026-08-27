const model = require("../models/categoriaModel");

//listar
exports.index = async (req, res) => {
    let categorias = await model.listar();

    res.render("categorias/index", {
        categorias,
        categoriaEditar: null
    });
};

//salvar
exports.salvar = async (req, res) => {
    await model.salvar({
        nome: req.body.nome.toUpperCase()
    });

    res.redirect("/categorias");
};