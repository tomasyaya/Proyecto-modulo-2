const {
  Router
} = require('express');
const router = new Router();
const mongoose = require('mongoose');
const Menu = require('../models/modelo-menu');
const Restaurante = require('../models/modelo-restaurante');

//Ruta GET restaurante específico
router.get('/restaurante/:id',async(req,res,next)=>{
  const restaurante = await Restaurante.findById(req.params.id);
  const menus= await Menu.find({idRestaurante: req.params.id});
  res.render('menu/crearMenu', {
    menus: menus,
    restaurante: restaurante
  });
})


// Ruta POST crear menú de restaurante
router.post('/menu/:id/crear', (req, res, next) => {
  const nombreMenu = req.body.nombreMenu;
  const idRestaurante = req.params.id;
  Menu.create({
      nombreMenu: nombreMenu,
      idRestaurante: idRestaurante
    })
    .then(menu => {
      res.redirect(`/restaurante/${idRestaurante}`)
    })
    .catch(error => console.log(error))
});

//Ruta POST para editar menú
router.post('/menu/:id', (req, res, next) => {
  const nombreMenu = req.body.nombreMenu;
  Menu.update({_id: req.params.id},
     {$set: {nombreMenu}  },  
     { new: true})
    .then(menu => res.redirect('/menu/:id/editar'))
    .catch(e => console.log(e))
})
//Ruta POST para borrar menú
router.post('/restaurante/:id/borrar', (req, res, next) => {
  Menu.findByIdAndRemove(req.params.id)
    .then(menu => res.redirect('/restaurante/:id'))
    .catch(error => console.log(error))
});

//TODO: hacer un router.delete 

module.exports = router;