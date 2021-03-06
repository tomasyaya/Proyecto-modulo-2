# Proyecto-modulo-2

# Developers:

Alberto Correia-Laura Ramirez

# Link to App:

- use in mode mobile device at browser, iphone X prefere

## Description:

Plataforma donde los locales que no dispongan de páginas web, puedan introducir y mostrar su menú de forma digital a sus clientes.

En fase avanzada usaremos la plataforma para construir una herramienta de gestión para los locales, y contenidos extra a modo de red social para usuarios.

## User Stories:

- **Página Principal**
- **Registrarse**
- **Iniciar sesión**
- **Cerrar sesión**
- **Crear Menú**
- **Mostrar Menú**

## Backlog:

-**Categorías**

-**Código QR**

## User profile:

- **Ver perfil restaurante**
- **Añadir imagenes al template del menú**

## ROUTES:

- **/index => render página de inicio**
- **/signup => render página de registro**
- **/login => render página de login**
- **/restaurante/ID => ver menú de restaurante concreto**
- **/restaurante/ID/introducir menú => Formulario introducción elementos menú**

## Models:
Usuario:
- **Nombre: String**
- **Email: String**
- **Contraseña**
```
```

Restaurante:
- **Nombre: String**
- **Dirección: String**
- **Horario:**
- **Menu:[Menus]:**
- **Logo:**
```
```
Menú:
- **Nombre del menu: String**
- **idRestaurante: String**,
- **Menu:[ArrayDeElementosDeMenu]:**
```
```

Elemento del Menú:
- **idMenu: String**,
- **Nombre: String**,
- **Precio: String**,
- **Imagen:**,
```
```

## Wireframes
Restaurante
![restaurante1](https://github.com/CorreiaAlberto/Proyecto-modulo-2/blob/master/wiframes/restaurante1.png)


![Wiframe2](https://github.com/CorreiaAlberto/Proyecto-modulo-2/blob/master/wiframes/Wiframe2.png)



## Links

KANBAN : https://trello.com/b/52ZhFMBf/proyecto


### Git

The url to your repository and to your deployed project
[Deploy Link]()

### Slides

The url to your presentation slides
[Slides Link](http://slides.com)
