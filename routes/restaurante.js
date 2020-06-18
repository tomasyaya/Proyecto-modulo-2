const {
  Router
} = require('express');
const router = new Router();
const mongoose = require('mongoose');
const Restaurante = require('../models/modelo-restaurante');

//OJO!!!
// router.get('/restaurante',(req,res,next)=>{
//   Restaurante.find()
//   .then(restaurante=>{
//     res.render('restaurante/restaurante',{restaurante:restaurante})
//   })
//   .catch(e=>console.log(e))
// })

//Ruta POST crear restaurante
router.post('/restaurante', async (req, res, next) => {
  try{
    const { nombre, calle, numero, horario } = req.body;
    const userId = req.session.currentUser;
    const numeroRestaurantes = await Restaurante.find();
    let pin=2000;
    if (numeroRestaurantes.length != 0) {
      let ordenados=numeroRestaurantes.sort((a, b)=>a.pin-b.pin);
      let total= ordenados.length;
      let mayor=ordenados[total-1];
      pin= mayor.pin+1;
    }
    const nuevoRestaurante = await Restaurante.create({
      nombre: nombre,direccion: {calle: calle,numero: numero},
      horario: horario,
      userId: userId,
      pin:pin
    })
    console.log(nuevoRestaurante)
    res.redirect('/user-profile')
  }
  catch(err){
    next(err)
  }
})



module.exports = router;