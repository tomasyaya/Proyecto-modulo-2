const {
  Router
} = require('express');
const router = new Router();
const mongoose = require('mongoose');
const ElementoMenu = require('../models/modelo-elemento-menu');
const Menu = require('../models/modelo-menu');

//Ruta POST elemento menú
router.post('/elemento', (req, res, next) => {
  const {
    nombre,
    precio,
    idMenu
  } = req.body;
  ElementoMenu.create({
    nombre: nombre,
    precio: precio,
    idMenu: idMenu
  })
  
    .then(menu => {
      console.log("Elemento del menu creado con exito: ", menu )
      res.redirect(`/menu/${idMenu}/editar`)
    })
    .catch(error => console.log(error))
});
//Ruta GET elemento específico del menú
router.get('/menu/:id/editar', (req, res, next) => {
  Menu.findById(req.params.id)
    .then(menu => {
      //Busqueda del elemento del menú
      ElementoMenu.find({
          idMenu: req.params.id
        })
        .then(elementosMenu => {
          res.render('menu/editMenu', {
            elementosMenu: elementosMenu,
            menu: menu,
            idMenu: req.params.id
          })
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
});
//Ruta POST borrar elemento específico del menú
router.post('/elemento/:id/borrar', (req, res, next) => {
  ElementoMenu.findByIdAndRemove(req.params.id)
  console.log("Elemento borrado con exito", ElementoMenu.findByIdAndRemove(req.params.id))
    .then(elementoMenu => res.redirect(`/menu/${elementoMenu.idMenu}/editar`))
    .catch(e => console.log(e))
});
// Ruta GET mostrar elemento específico del menú 
//acabado?????
router.get('/elemento/:id/editar', (req, res, next) => {

})


module.exports = router;