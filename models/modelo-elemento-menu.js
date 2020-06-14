const {Schema,model} = require('mongoose');

const elementoMenuSchema = new Schema({
  nombre: {
    required: true,
    trim: true,
    type: String
  },
   precio: Number,
   idMenu: String
})

module.exports = model('elementoMenu', elementoMenuSchema)