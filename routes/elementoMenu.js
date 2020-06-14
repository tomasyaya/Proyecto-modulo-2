const { Router } = require('express');
const router = new Router();
const mongoose = require('mongoose');
const ElementoMenu = require('../models/modelo-elemento-menu');


router.get('/menu/:id/editar', (req, res, next) => {
  ElementoMenu.find()
    .then(elementoMenu => { 
      console.log(elementoMenu);
      res.render('menu/editMenu', { elementoMenu: elementoMenu }) })
    .catch(e => console.log(e))
});

router.post('/menu/:id/editar', (req, res, next) => {
  const { nombre, precio } = req.body;
  const idMenu= req.params.id;
  ElementoMenu.create({nombre:nombre, precio:precio,idMenu:idMenu})
  .then(menu => {res.redirect('/menu/:id/editar') })
  .catch(e => console.log(e))
});








module.exports = router;