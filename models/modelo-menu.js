const {Schema, model} = require('mongoose');

const menuSchema = new Schema({
  nombreMenu: String,
  id_restaurante: String,
  elementos: [String]
})

module.exports = model('Menu', menuSchema)