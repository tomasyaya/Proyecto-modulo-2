const {Schema,model} = require('mongoose');

const elementoMenuSchema = new Schema({
  nombre: {
    required: true,
    trim: true,
    precio: Number
  }
})

module.exports = model('elementoMenu', elementoMenuSchema)