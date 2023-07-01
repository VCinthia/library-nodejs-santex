```jsx


### Links relacionados y documentación:

https://github.com/nvm-sh/nvm

[File system | Node.js v20.3.0 Documentation](https://nodejs.org/api/fs.html)

[npm](https://www.npmjs.com/)

[Lodash](https://lodash.com/)

```tsx
//Iniciar un proyecto npm:
npm init // crea un package.json: nos va a pedir nombre del paquete, version, descri.. etc.

//para instalar dependecias DENTRO DEL PROYECTO:
npm i <nombre de dependencia de la pag npm>, ejemplos: lodash, nodemon para trabajar en etapa de desarrollo, typeORM, etc

			//como usar nodemon:
			agregar en el package.json el comando star:dev : "nodemon app.js"

			//como usar lodash:
			en el archivo app.js: declaro: const _ : required("lodash");
														la uso haciendo: _.<nombre de funcion que busco>

			//usar fs: es la api para interacturar con los archivos del sistema
			en el archivo app.js: declaro: const fs : required("fs");
														la uso haciendo: fs.<nombre de funcion que busco>
			

```

[The Collaborative API Development Platform](https://insomnia.rest/)

[Refactorización y patrones de diseño](https://refactoring.guru/es)

[Sequelize](https://sequelize.org/)

---

**Enunciado**:

*Se requiere una API REST que permita manejar librerías y los libros asociados a cada una de las librerías. 
Utilizar Node.Js Express, Sequelize y Passport como la infraestructura para crear el servicio. 
Usar SQLlite como motor de base de datos.*
```

**Entidades**:

- **Libreria:**
    - Descripción: Una librería puede tener desde 0 a muchos libros.
    - Ruta: `/library`
    - Acciones
        - Crear librería (AUTH)
        - Obtener una librería *~ debe traer también todos los libros.*
        - Obtener todas las librerías *~ debe traer también todos los libros.*
        - Modificar una librería (AUTH)
        - Eliminar una librería (**) (AUTH)
        - Agregar un libro nuevo (*) (AUTH)
    - Entidad:
    
    | id  | Int | El identificador de la librería |
    | --- | --- | --- |
    | name | String | Nombre de la librería. Eg: El Librote |
    | location | String | Dirección física de la librería. Eg: Av. Libertador 1460 |
    | phone | String | Número de teléfono. Eg: 3514563344 |

- **Libro:**
    - Descripción: Un libro tiene todos los datos del mismo, puede pertenecer a una librería o no y representan la instancia (copia) de un libro. Puede haber más de un libro con los mismos datos, excepto el id que es único para esa instancia.
    - Ruta: `/book`
    - Acciones
        - Crear libro (*) (AUTH)
        - Obtener un libro en particular
        - Obtener todos los libros
        - Modificar un libro (AUTH)
        - Eliminar un libro (**) (AUTH)
    - Entidad:
    
    | id  | Int | El identificador de este libro en particular |
    | --- | --- | --- |
    | isbn | Int | Este identificador es único en todo el mundo y representa el
    libro, la versión del autor y el año de edición |
    | titte | String | Título del libro |
    | author | String | Autor del libro |
    | year | String | Año de edición del libro |
    | library | String | El identificador de la librería en donde este libro se encuentra |
    
    (*): Para crear un libro, pueden hacerlo de las dos formas:
    
    - Haciendo que la librería tenga un método para agregar un libro nuevo
    - Crear un libro directamente con /book y enviar el id de la librería
    
    (**) El borrado, siempre de forma lógica. Esto quiere decir que no borramos de la base de datos si no que marcamos que fué borrado
    
- **Usuario:**
    - Descripción: Un usuario del sistema. Estos usuarios van a ser creados en la base de datos cuando se inicia el sistema
    - Ruta: `/user`
    - Acciones
        - Login
    - Entidad:
    
    | name | String | Nombre de usuario |
    | --- | --- | --- |
    | password | String | Contraseña |

**Entidades**:

- Que la API permite hacer un CRUD de librerías
- Que la API permite hacer un CRUD de libros
- Que las acciones marcadas con (AUTH) sólo se puedan ejecutar si el usuario está autenticado
- Definir y crear la entidad de Usuario
- Describir el proceso de desarrollo. (Cómo fueron fueron creados los archivos y por qué)
- Bonus:
    - Que haya validación de las entidades al momento de crearse/actualizarse

Pasos a seguir:

- [ ]  App.js:
    - [ ]  Es el punto de entrada principal de la aplicacion. Aqui usaremos todas rutas previamente configuradas, los middleware necesarios y todo aquello que se requiera.
    Además se definirán las llamadas al PORT, el framework que le dará la arquitectura a la aplicación y las funciones necesarias ademas de importaciones.
- [ ]  Generar los modelos de las entidades.
    - [ ]  Book
    - [ ]  Library
    - [ ]  User
- [ ]  Hacer las asociaciones a través ‘sequelize’.
- [ ]  Agregar todas a `.models/index.js`
- [ ]  Provider:
    - [ ]  Generar el provider de cada entidad. → lógica del modelo.
    - [ ]  Agregar a index para importar junto a otros llamandolos a traves del modulo del provider.
- [ ]  Service:
    - [ ]  Generar el service de cada entidad, utiliza la logica de negocio del provider y abstrae su funcionamiento.
    - [ ]  Agregar a index para importar junto a otros llamandolos a traves del modulo del service.
- [ ]  Controller:
    - [ ]  Generar el controller de cada entidad, utiliza la logica del service y funciona como intermediario de la peticion y la ruta a la que llamara posteriormente el router.
    - [ ]  Agregar a index para importar junto a otros llamandolos a traves del modulo del controller.
- [ ]  Router:
    - [ ]  Generar el router de cada entidad, aqui rutear las rutas necesarias para el crud. Se llaman a los metodos del controller y se agregan los middleware necesarios para definir los niveles de seguridad que queremos que tengan estas rutas.
    - [ ]  Agregar a index para importar junto a otros llamandolos a traves del modulo del router.


