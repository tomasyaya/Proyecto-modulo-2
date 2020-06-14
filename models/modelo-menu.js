const {Schema, model} = require('mongoose');

const menuSchema = new Schema({
  nombre: String,
  id_restaurante: Number,
  elementos: [elementos - menu]
})