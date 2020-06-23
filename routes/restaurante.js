const {
  Router
} = require('express');
const router = new Router();
const mongoose = require('mongoose');
const Restaurante = require('../models/modelo-restaurante');
const uploadCloud = require('../configs/cloudinary');

//Ruta POST crear restaurante
router.post('/restaurante',uploadCloud.single('logo'), async (req, res, next) => {
  try {
    const { nombre, calle, numero, horario } = req.body;
    const userId = req.session.currentUser;
    const logoNombre = req.file.originalName
    const logoUrl =req.file.path
    const numeroRestaurantes = await Restaurante.find();
    let pin = 1000;
    if (numeroRestaurantes.length != 0) {
      let ordenados = numeroRestaurantes.sort((a, b) => a.pin - b.pin);
      console.log(ordenados)
      let total = ordenados.length;
      console.log(total)
      let mayor = ordenados[total - 1];
      pin = mayor.pin + 1;
    }
    const nuevoRestaurante = await Restaurante.create({
      nombre: nombre, direccion: { calle: calle, numero: numero },
      horario: horario,
      userId: userId,
      pin: pin,
      logoNombre: logoNombre,
      logoUrl: logoUrl
    })
    console.log(nuevoRestaurante)
    res.redirect('/user-profile')
  }
  catch (err) {
    next(err)
  }
})

//Ruta POST editar restaurante
router.post('/api/restaurante/:id/editar', async (req, res, next) => {
  try {
    const { nombre, calle, numero, horario } = req.body;
    const userId = req.session.currentUser;
    const restauEditado = await Restaurante.findByIdAndUpdate(req.params.id, {
      $set: {
        nombre: nombre, direccion: { calle: calle, numero: numero },
        horario: horario,
      }
    }, { new: true })
    res.redirect('/user-profile')
  }
  catch (err) {
  next(err)
}
})

//Ruta POST borrar restaurante
router.post('/api/restaurante/:id/borrar', async(req,res,next)=>{
  try{
    const restauranteBorrado= await Restaurante.findByIdAndRemove(req.params.id);
    res.redirect('/user-profile');
  }
  catch (err) {
    next(err)
  }
})

module.exports = router;