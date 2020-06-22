const { Router } = require('express');
const router = new Router();
const mongoose = require('mongoose');
const Restaurante = require('../models/modelo-restaurante');
const Menu = require('../models/modelo-menu');


router.post('/tipomenu/:id/crear', async (req, res, next) => {
  try {
    const { tipoDeMenu, nombreMenu, precioMenu } = req.body;
    const idRestaurante = req.params.id;
    const tipoMen = await Menu.create({ tipoDeMenu: tipoDeMenu, nombreMenu: nombreMenu, 
      precioMenu: precioMenu, idRestaurante: idRestaurante })
    res.redirect(`/restaurante/${idRestaurante}`)
  }catch(err){
    next(err)
  } 
})



module.exports = router;