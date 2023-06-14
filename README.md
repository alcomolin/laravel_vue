
# Crud Laravel y VueJs

Se realizo un CRUD de productos utilizando como stack tecnologico Laravel para el Backend y VueJs para el Frontend, como base de datos se utilizo MySql.

## API Reference

#### Obtener productos
Peticion GET para obtener todos los productos registrados para ser listados.
```http
  GET /api/product
```

#### Crear producto
Peticion POST para la creacion de un nuevo producto.
```http
  POST /api/product
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | Nombre del producto |
| `description`      | `string` | Descripcion del producto |
| `Stock`      | `integer` | Cantidad del producto |

#### Editar producto
Peticion PUT para la edicion de productos ya registrados.
```http
  PUT /api/product/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | Nombre del producto |
| `description`      | `string` | Descripcion del producto |
| `Stock`      | `integer` | Cantidad del producto |

#### Eliminar producto
Peticion DELETE para la eliminacion de un producto registrado.
```http
  DELETE /api/product/${id}
```



## Appendix

* El controlador con los metodos que actuan con la base de datos en el Backend es:
    #### app\Http\Controllers\ProductController.php
#
* Se definio una ruta resource para los 'index', 'store', 'update', 'show', 'destroy' del controlador en el archivo: 
    #### routes\api.php
#
* Se creo div en el cual se iniciara la VueJs, ademas de adicionar plugins que seran utilizados tales como, Bootstrap, Font-awesome, y Sweet Alert 2 en el archivo:
    #### resources\views\app.blade.php
#
* Se definio e importo todos los plugins que se utilizarian en el Frontend con VueJs en el archivo: 
    #### resources\js\app.js
#
* Se crearon los componentes necesarios para crear una SPA con VueJs, asi mismo como las funciones con las peticiones al Backend con axios en la ruta: 
    #### resources\js\components\product
## Deployment

Para desplegar este proyecto, ejecute

* Compilar VueJs:
```bash
  npm run dev
```
* Iniciar servicio Laravel:
```bash
  php artisan serve
```
* Ingresar a la aplicacion:
  #### [Crud Laravel y VueJs](http://127.0.0.1:8000/)

## Authors

- [@Alejandro Correa Molina](https://github.com/alcomolin)

