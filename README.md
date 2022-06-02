
![alt text](./public/images/Demostracion.gif "Demostracion")

# ALL GAMER
Sitio web de tienda de articulos de computacion orientados al Gaming, organizados por categorias.

## Inicio
Se ejecutar NPM start para iniciar el servidor y montar los componentes

## Routes

La ruta **de inicio '/'** donde se encuentran todos los productos disponibles.(Aclaración: al estar posicionado en alguna otra ruta, el logo contiene un link para volver a la ruta de inicio)

La ruta **'/item/:productoId'** muestra el detalle del producto, fotos e información detallada del mismo.

La ruta **'/item/:categoriaId'** nos permite filtrar y mostrar unicamente los productos por categoria seleccionada. 
(Aclaración: la categoria Juegos se dejo vacia adrede para que al seleccionarla se indique que no se encontraron productos, al no existir los mismos de esa clase de categoria)

La ruta **'*'** es para indicar que la pagina no fue encontrada

## Componentes

Item: Componente donde se visualiza la card de cada producto, con nombre, precio, imagen y se le incluyo un contador para seleccionar el numero de productos deseados. Ademas cuenta con un Link para redireccionar al detalle del mismo

ItemCount: Componente que contiene las funciones de ambos botones sumar o restar producto. Ademas del boton de agregar al carrito cuya funcional aun no esta implementada

ItemDetail: Componente donde se visualiza el detalle del producto, con fotos adicionales e informacion del mismo, cuenta tambien con el ItemCount.

ItemDetailContainer: Muestra componente ItemDetail luego de seleccionarlo en la pagina inicial.

ItemList: Componente que atraves del método map, monta cada producto desde el componente Item cuando se realiza la llamada correspondiente.

ItemListContainer: Componente encargado de mostrar las distintas categorias seleccionadas con sus productos. Ademas muestras el mensaje "cargando productos" mientras son cargados en la página.

Navbar: Se encuentran las categorias de los productos, el nombre del sitio web y el logo al cual podemos seleccionar para volver a la pagina principal, ademas contiene el CartWidget.

CartWidget: Muestra la cantidad de productos en el carrito, sin funcionalidad por el momento.



