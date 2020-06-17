const { Router } = require('express');
const router = new Router();
const mongoose = require('mongoose');
const Menu = require('../models/modelo-menu');
const Restaurante = require('../models/modelo-restaurante');
const ElementoMenu = require('../models/modelo-elemento-menu');
const async = require('async')

router.get('/listado', async (req, res, next) => {
  try {
    const restaurantes = await Restaurante.find();
    res.render('listado/listado', { restaurantes: restaurantes });
  }
  catch (error) {
    next(error)
  }
})


router.get('/listado/:id', async (req, res, next) => {
  try{
    const restaurante = await Restaurante.findById(req.params.id);
    const menus = await Menu.find({ idRestaurante: req.params.id });
    misMenus = [];
    for (let i = 0; i < menus.length; ++i) {
      let elementos = await ElementoMenu.find({ idMenu: menus[i].id })
      misMenus.push({
        nombre: menus[i].nombreMenu,
        elementos: elementos
      });
    }
    res.render('listado/restaurante', { menus: misMenus, restaurante: restaurante })
  }
  catch(err){
    next(err)
  }  
})
  

module.exports = router;