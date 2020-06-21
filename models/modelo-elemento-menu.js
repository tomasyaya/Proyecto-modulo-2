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
   idMenu: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu"
  }
})

module.exports = model('elementoMenu', elementoMenuSchema)