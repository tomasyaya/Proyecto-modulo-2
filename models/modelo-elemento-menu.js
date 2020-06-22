//Esquema de los elementos del menú
const {Schema,model} = require('mongoose');
const mongoose = require('mongoose');

const elementoMenuSchema = new Schema({
  nombre: {
    required: true,
    trim: true,
    type: String
  },
   precio: Number,
   idCategoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categoria"
  }
})

module.exports = model('elementoMenu', elementoMenuSchema)