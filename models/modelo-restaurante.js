const { Schema, model } = require('mongoose');

const restaurantSchema = new Schema(
  {
    nombre : {
      type : String,
      required: true
    },
    direccion: {
      calle: {
        type: String,
        required: true
      },
      numero : {
        type: Number,
        required: true
      },
      horario: String,
      menu: [String],
      logo: Image
    }

}
)

module.exports = model('Restaurante', accionSchema);