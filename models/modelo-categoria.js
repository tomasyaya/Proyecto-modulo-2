//Esquema de las categorias
const {Schema, model} = require('mongoose');
const mongoose = require('mongoose');

const categoriaSchema = new Schema({
  nombreCategoria: String,
  idMenu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu"
  },
  idRestaurante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurante"
  }
})

module.exports = model('Categoria', categoriaSchema)