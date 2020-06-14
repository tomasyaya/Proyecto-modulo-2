const { Router } = require('express');
const router = new Router();
const mongoose = require('mongoose');
const Menu = require('../models/modelo-menu');


router.get('/menu', (req, res, next) => {
  Menu.find()
      .then(menus => {res.render('menu/crearMenu', { menus: menus });})
      .catch(err => err)
});

router.post('/menu', (req,res,next)=>{
  const nombreMenu=req.body.nombreMenu;
  const userId= req.session.currentUser;
  Menu.create({nombreMenu:nombreMenu,useid_restaurante:userId})
  .then(menu=> {
    res.redirect('/menu')
  })
  .catch(e=>console.log(e))
})

router.get('/menu/:id/editar', (req, res, next) => {    
  Menu.findById(req.params.id)
  .then(menu=>{res.render('menu/editMenu', {menu:menu}) })
  .catch(e=>console.log(e))

});

router.post('/menu/:id', (req, res, next)=>{
  const nombreMenu= req.body.nombreMenu;
  Menu.update({_id:req.params.id},{$set:{nombreMenu}},{ new: true })
  .then(menu=>res.redirect('/menu/:id/editar'))
  .catch(e=>console.log(e))
})

router.post('/menu/:id/borrar', (req,res,next)=>{
  Menu.findByIdAndRemove(req.params.id)
  .then(menu=>res.redirect('/menu'))
  .catch(e=>console.log(e))
});

//TODO: hacer un router.delete 

module.exports = router;