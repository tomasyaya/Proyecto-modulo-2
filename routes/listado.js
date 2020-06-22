const { Router } = require('express');
const router = new Router();
const mongoose = require('mongoose');
const Categoria = require('../models/modelo-categoria');
const Restaurante = require('../models/modelo-restaurante');
const ElementoMenu = require('../models/modelo-elemento-menu');
const async = require('async')

//RUTA DE LISTADO PARA BUSQUEDA
// router.get('/listado', async (req, res, next) => {
//   try {
//     const restaurantes = await Restaurante.find();
//     res.render('listado/listado', { restaurantes: restaurantes });
//   }
//   catch (error) {
//     next(error)
//   }
// })


router.get('/:pin', async (req, res, next) => {
  try{
    const restaurante = await Restaurante.findOne({pin:req.params.pin});
    const categorias = await Categoria.find({ idRestaurante: restaurante.id });
    misCategorias = [];
    for (let i = 0; i < categorias.length; ++i) {
      let elementos = await ElementoMenu.find({ idCategoria: categorias[i].id })
      misCategorias.push({
        nombre: categorias[i].nombreCategoria,
        elementos: elementos
      });
    }
    res.render('listado/restaurante', { categorias: misCategorias, restaurante: restaurante })
  }
  catch(err){
    next(err)
  }  
})
  

module.exports = router;