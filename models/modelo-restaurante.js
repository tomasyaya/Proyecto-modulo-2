//Esquema del restaurante
const {
  Schema,
  model
} = require('mongoose');
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
  logoNombre: {
    type: String,
    default: "Logo por defecto"
  },

  logoUrl: {
    type: String,
    default: "https://res.cloudinary.com/dtkvfvtev/image/upload/v1593243674/test-folder/logo_default_nyltu1.png"
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario"
  }
})

module.exports = model('Restaurante', restauranteSchema)