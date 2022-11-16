Inicializar entorno de node (npm init)

Instalar Herramientas de producción
npm i express
npm i -D nodemon
crear el archivo GIT Ignore
inicializar git

configurar el package.json cons los script de inicializacion de la app y nodemon para escuchasr todos los cambios de nustra app sin tener que estar inicializando por cada cambio.

craer servidor usando express en app.js

asi como las distintas rutas a usar con los verbos (get, patch, post, etc.),
tambien  se asigna puesto y se inicaliza express.

app.listen se ubicara al final de nuestro app.js


/profile GET
{
 info: profile user
}

/ejemplo POST
[
 info jobs
]
/ejemplo PATCH
[
 info hobbies
]