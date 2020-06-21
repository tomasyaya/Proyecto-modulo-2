//Esquema del menú
const {Schema, model} = require('mongoose');
const mongoose = require('mongoose');

const menuSchema = new Schema({
  nombreMenu: String,
  idRestaurante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurante"
  }
})

module.exports = model('Menu', menuSchema)