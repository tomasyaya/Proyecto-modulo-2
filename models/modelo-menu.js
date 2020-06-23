const {Schema, model} = require('mongoose');
const mongoose = require('mongoose');

const menuSchema = new Schema({
  tipoDeMenu:{
    type: String,
    enum:['Carta','Menu'], 
    default:'Carta'
  },
  nombreMenu: String,
  idRestaurante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurante"
  },
  precioMenu: Number
})

module.exports = model('Menu', menuSchema)