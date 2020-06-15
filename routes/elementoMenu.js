const { Router } = require('express');
const router = new Router();
const mongoose = require('mongoose');
const ElementoMenu = require('../models/modelo-elemento-menu');
const Menu = require('../models/modelo-menu');


router.post('/elemento', (req, res, next) => {
  const { nombre, precio, idMenu } = req.body;
  ElementoMenu.create({ nombre: nombre, precio: precio, idMenu: idMenu })
    .then(menu => { res.redirect(`/menu/${idMenu}/editar`) })
    .catch(e => console.log(e))
});

router.get('/menu/:id/editar', (req, res, next) => {
  Menu.findById(req.params.id)
    .then(menu => {
      ElementoMenu.find({ idMenu: req.params.id })
        .then(elementosMenu => {
          res.render('menu/editMenu', { elementosMenu: elementosMenu, menu: menu, idMenu: req.params.id })
        })
        .catch(e => console.log(e))
    })
    .catch(e => console.log(e))
});

router.post('/elemento/:id/borrar', (req, res, next) => {
  ElementoMenu.findByIdAndRemove(req.params.id)
  .then(elementoMenu=>res.redirect(`/menu/${elementoMenu.idMenu}/editar`))
  .catch(e=>console.log(e))
});

router.get('/elemento/:id/editar', (req, res, next)=>{
  
})


module.exports = router;