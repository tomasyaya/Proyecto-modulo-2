const { Router } = require('express');
const router = new Router();
const mongoose = require('mongoose');
const Menu = require('../models/modelo-menu');
const Restaurante = require('../models/modelo-restaurante');
const ElementoMenu = require('../models/modelo-elemento-menu');

router.get('/listado', (req, res, next) => {
  Restaurante.find()
    .then(restaurantes => {
      res.render('listado/listado', { restaurantes: restaurantes })
    })
    .catch(e => console.log(e))
})

router.get('/listado/:id', (req, res, next) => {
  Restaurante.findById(req.params.id)
    .then(restaurante => {
      Menu.find({ idRestaurante: req.params.id })
        .then(menus => {
          ElementoMenu.find()
            .then(elementos => {
              res.render('listado/restaurante', { menus: menus, restaurante: restaurante, elementos: elementos})
            })
            .catch(err => err)
        })
        .catch(err => err)
    })
    .catch(err => err)
})








module.exports = router;