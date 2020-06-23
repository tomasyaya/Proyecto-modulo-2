//Esquema del restaurante
const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const restauranteSchema = new Schema({
  nombre: {
    type: String,
    trim: true,
    required: true
  },
  direccion: {
    calle: {
      type: String,
      trim: true,
      required: true
    },
    numero: {
      type: Number,
      required: true
    },
  },
  horario: String,
  pin: Number,
  logoNombre: String,
  logoUrl: String,

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario"
  }
})

module.exports = model('Restaurante', restauranteSchema)