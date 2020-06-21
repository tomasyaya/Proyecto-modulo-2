//Esquema del menú
const {Schema, model} = require('mongoose');
const mongoose = require('mongoose');

const categoriaSchema = new Schema({
  nombreCategoria: String,
  idRestaurante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurante"
  }
})

module.exports = model('Categoria', categoriaSchema)