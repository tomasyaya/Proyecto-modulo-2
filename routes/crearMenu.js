const { Router } = require('express');
const router = new Router();
const mongoose = require('mongoose');
const Menu = require('../models/modelo-menu');


router.get('/menu', (req, res, next) => {
  res.render('menu/crearMenu')
});

router.post('/menu', (req,res,next)=>{
  const nombreMenu=req.body.nombreMenu;
  const userId= req.session.currentUser;
  Menu.create({nombreMenu:nombreMenu,useid_restaurante:userId})
  .then(menu=> {
    console.log(menu);
    res.render('menu/elementoMenu')
  })
  .catch(e=>console.log(e))
})



module.exports = router;