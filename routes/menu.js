const { Router } = require('express');
const router = new Router();
const mongoose = require('mongoose');
const Menu = require('../models/modelo-menu');
const Restaurante = require('../models/modelo-restaurante');


router.get('/restaurante/:id', (req, res, next) => {
  Restaurante.findById(req.params.id)
    .then(restaurante =>
      Menu.find({ idRestaurante: req.params.id })
        .then(menus => { res.render('menu/crearMenu', { menus: menus, restaurante: restaurante }); })
        .catch(err => err)
    )
    .catch(err => err)
});

router.post('/menu/:id/crear', (req, res, next) => {
  const nombreMenu = req.body.nombreMenu;
  const idRestaurante = req.params.id;
  Menu.create({ nombreMenu: nombreMenu, idRestaurante: idRestaurante })
    .then(menu => {
      res.redirect(`/restaurante/${idRestaurante}`)
    })
    .catch(e => console.log(e))
})

// router.get('/menu/:id/editar', (req, res, next) => {    
//   Menu.findById(req.params.id)
//   .then(menu=>{res.render('menu/editMenu', {menu:menu}) })
//   .catch(e=>console.log(e))
// });

router.post('/menu/:id', (req, res, next) => {
  const nombreMenu = req.body.nombreMenu;
  Menu.update({ _id: req.params.id }, { $set: { nombreMenu } }, { new: true })
    .then(menu => res.redirect('/menu/:id/editar'))
    .catch(e => console.log(e))
})

router.post('/menu/:id/borrar', (req, res, next) => {
  Menu.findByIdAndRemove(req.params.id)
    .then(menu => res.redirect('/menu'))
    .catch(e => console.log(e))
});

//TODO: hacer un router.delete 

module.exports = router;