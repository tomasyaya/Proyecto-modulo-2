const { Router } = require('express');
const router = new Router();
const mongoose = require('mongoose');
const Restaurante = require('../models/modelo-restaurante');
const Menu = require('../models/modelo-menu');
const Categoria = require('../models/modelo-categoria');
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
  try {
    const restaurante = await Restaurante.findOne({ pin: req.params.pin });
    const menus = await Menu.find({ idRestaurante: restaurante._id });
    console.log(menus)
    let misMenus = [];
    for (let i = 0; i < menus.length; ++i) {
      let menu = menus[i];
      const categorias = await Categoria.find({ idMenu: menu.id });
      console.log(categorias)
      let misCategorias = [];
      console.log(misCategorias)
      for (let i = 0; i < categorias.length; ++i) {
        let elementos = await ElementoMenu.find({ idCategoria: categorias[i].id })
        console.log(elementos)
        misCategorias.push({
          nombre: categorias[i].nombreCategoria,
          elementos: elementos
        });
      }
      misMenus.push({ nombre: menu.nombreMenu, precio: menu.precio, tipo: menu.tipoDeMenu, categorias: misCategorias })
    console.log("misMneus",misMenus)
    }

    res.render('listado/restaurante', {
      menus: misMenus, restaurante: restaurante,
    })
  }
  catch (err) {
    next(err)
  }
})


module.exports = router;