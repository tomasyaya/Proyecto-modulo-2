const {
  Router
} = require('express');
const router = new Router();
const mongoose = require('mongoose');
const Categoria = require('../models/modelo-categoria');
const Restaurante = require('../models/modelo-restaurante');

//Ruta GET restaurante específico
router.get('/restaurante/:id',async(req,res,next)=>{
  const restaurante = await Restaurante.findById(req.params.id);
  const categoria= await Categoria.find({idRestaurante: req.params.id});
  res.render('menu/crearMenu', {
    categoria: categoria,
    restaurante: restaurante
  });
})


// Ruta POST crear categorias de restaurante
router.post('/menu/:id/crear', async(req, res, next)=>{
  try{
    const nombreCategoria = req.body.nombreCategoria;
    const idRestaurante = req.params.id;
    const categoria = await Categoria.create({nombreCategoria: nombreCategoria,idRestaurante: idRestaurante})
    res.redirect(`/restaurante/${idRestaurante}`)
  }
  catch(err){
    next(err)
  } 
})
//Ruta POST para editar categoria
router.post('/menu/:id', async (req, res, next) => {
  try{
    const nombreCategoria = req.body.nombreCategoria;
    const categoriaEditada= await Categoria.update({_id: req.params.id},
      {$set: {nombreCategoria}},{ new: true});
      const id=req.params.id;
      res.redirect(`/menu/${id}/editar`)
  }catch(err){
    next(err)
  } 
})
  

//Ruta POST para borrar categoria
router.post('/restaurante/:id/borrar', async (req, res, next) => {
  try{
    const categoriaBorrada= await Categoria.findByIdAndRemove(req.params.id);
    const id=categoriaBorrada.idRestaurante;
    res.redirect(`/restaurante/${id}`)
  }
  catch(err){
    next(err)
  } 
});


module.exports = router;