const {
  Router
} = require('express');
const router = new Router();
const mongoose = require('mongoose');
const ElementoMenu = require('../models/modelo-elemento-menu');
const Categoria = require('../models/modelo-categoria');

//Ruta POST elemento menú
router.post('/elemento', async (req, res, next) => {
  try {
    const { nombre, precio, idCategoria } = req.body;
    const elemento = await ElementoMenu.create({ nombre: nombre, precio: precio, idCategoria: idCategoria });
    console.log("Elemento de la categoria creada con exito: ", elemento);
    res.redirect(`/menu/${idCategoria}/editar`)
  } catch (err) {
    next(err)
  }
});

//Ruta GET actualiza los elementos del menu 
router.get('/menu/:id/editar', async (req,res,next)=>{
  try{
    const categoria = await Categoria.findById(req.params.id);
    const elementosMenu= await  ElementoMenu.find({idCategoria: req.params.id});
    res.render('menu/editMenu', {elementosMenu: elementosMenu,categoria: categoria,idCategoria: req.params.id})
  }catch(err){
    next(err)
  } 
})

//Ruta POST borrar elemento específico del menú
router.post('/elemento/:id/borrar', (req, res, next) => {
  ElementoMenu.findByIdAndRemove(req.params.id)
    .then(elementoMenu => {
      res.redirect(`/menu/${elementoMenu.idCategoria}/editar`)
      console.log("Elemento borrado con exito", elementoMenu)
    })
    .catch(e => console.log(e))
});

// Ruta GET mostrar elemento específico del menú 
//acabado?????
router.get('/elemento/:id/editar', (req, res, next) => {

})


module.exports = router;