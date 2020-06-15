const express = require('express');
const router  = express.Router();
const saltRounds = 10
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");
const Usuario = require('../models/modelo-usuario');
const session = require('express-session')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
//Get user-profile
router.get("/user-Profile", (req, res) => {
  Usuario.find({userId: req.session.currentUser})
  .then(usuario => {
    console.log(usuario, req.session.currentUser)
    res.render("auth/user-profile",{usuario: req.session.currentUser})
  })
  .catch(error => console.log(error))
})

//Ruta GET registro
router.get("/signup", (req, res) => res.render("auth/signup"))

//Ruta POST registro
router.post("/signup", (req, res) => {

  const {
    nombre,
    email,
    password
  } = req.body
  //comprobracion de que todods los campos han sido introducidos
  if (!nombre || !email || !password) {
    res.render("auth/signup", {
      errorMessage: "Los campos username, email y contraseña son obligatorios"
    })
    return
  }
  //Validacion password fuerte
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {

    res.status(400).render('auth/signup', {
      errorMessage: 'La contraseña debe contener al menos 6 caracteres, una mayúscula y un número'
    });

    return;

  }

  // Encriptacion de la password
  bcrypt.genSalt(saltRounds)
    .then(salt => bcrypt.hash(password, salt))
    .then(hashedPassword => {
      console.log("La hash es", hashedPassword)
      //Crear usuario 
     Usuario.create({
         nombre: nombre,
          email: email,
          passwordHash: hashedPassword
        })
        .then(data => {
          console.log("Usuario creado con exito. Datos:", data)
          res.redirect("/user-Profile")
        })
        .catch(error => {
          //Error de validacion
          if (error instanceof mongoose.Error.ValidationError) {
            res.status(400).render('auth/signup', {
              errorMessage: error.message
            });
            //Error de duplicidad
          } else if (error.code === 11000) {
            res.status(400).render('auth/signup', {
              errorMessage: 'username o correo ya existen, por favor pruebe uno nuevo.'
            });

          } else {
            next(error);
          }

        })

    })

})
//Ruta GET Inicio sesion
router.get('/login', (req, res) => res.render('auth/login'))

//Ruta POST inicio sesion
router.post('/login', (req, res, next) => {
  const { email, password } = req.body;
   //comprobracion de que todods los campos han sido introducidos
  if (email === '' || password === '') {
    res.render('auth/login', {
      errorMessage: 'Por favor introduzca ambos campos para continuar'
    });
    return;
  }
//Buscamos usuario por mail
  Usuario.findOne({ email })
    .then(usuario => {
      if (!usuario) {
        //si no hay usuario con ese mail, no esta registrado
        res.render('auth/login', { errorMessage: 'Este Email no esta registrado, pruebe otro' });
        return;
        //comprobamos contraseña
      } else if (bcrypt.compare(password, usuario.passwordHash)) {
        req.session.currentUser = usuario
        console.log(password, usuario.passwordHash)
        console.log(bcrypt.compare(password, usuario.passwordHash))
        res.redirect("user-profile")
      } else {
        // si la contraseña no es correcta, mostramos error
        res.render('auth/login', { errorMessage: 'Contraseña incorrecta.' });
      }
    })
    .catch(error => next(error));
});

router.post('/logout', (req,res,next)=>{
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
