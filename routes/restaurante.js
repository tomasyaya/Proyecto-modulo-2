const {
  Router
} = require('express');
const router = new Router();
const mongoose = require('mongoose');
const Restaurante = require('../models/modelo-restaurante');

//Ruta POST crear restaurante
router.post('/restaurante', (req, res, next) => {
  const {
    nombre,
    calle,
    numero,
    horario
  } = req.body;
  const userId = req.session.currentUser;
  Restaurante.create({
      nombre: nombre,
      direccion: {
        calle: calle,
        numero: numero
      },
      horario: horario,
      userId: userId
    })
    .then(restaurante => {
      console.log(restaurante)
      res.redirect('/user-profile')
    })
    .catch(error => console.log(error))
})

// router.post('/api/restaurante/:id/editar', async (req,res,next)=>{
//  const restauEditado= await Restaurante.findByIdAndUpdate(req.params.id,{nombre:req.body.nombre})
//   res.json({resultado:restauEditado})
// })

module.exports = router;