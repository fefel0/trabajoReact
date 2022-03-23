# Trabajo final de React para [Coder House](https://www.coderhouse.com/)

## Documentacion del Proyecto:
Ecommerce desarrollado para Jarwar, pagina dedicada a la venta de Hardware y tecnologia.

![Demo](https://imgkub.com/images/2022/03/23/ezgif.com-gif-maker.gif)

## Ejecutar la aplicacion: 
1º- Abrir nueva terminal y clonar el repositorio con:
```sh
https://github.com/fefel0/trabajoReact.git
```
2º- Una vez dentro del proyecto, abrimos nueva terminal y ejecutamos lo siguiente:
```sh
cd trabajoReact
npm install
npm start
```
## Dependencias Utilizadas:
- React Router: Se utilizo para crear un rutas entre diferentes componentes. Se logro una navegabilidad dinamica en la app.

- Firebase: Se utilizo Firebase como base de datos para suplantar el backend. Se logro conectar la app con esta libreria para devolver los datos de nuestros productos.

- React Icons: Libreria utilizada para importar iconos desde esta misma. 

## Rutas:
- Index: ('/'): En esta ruta encontramos todos los productos renderizados desde la base de datos. Podemos encontrar una barra de navegacion en la parte superior, que nos direccionara a las diferentes categorias.

- Category: ('/category/:categoryId'): Ruta que renderiza los productos por su respectiva categoria, ya asignada en la base de datos y filtrado a traves del codigo. Se visualiza el producto co su precio y una imagen de referencia. 

- Item ('/detail/:productId'): Aqui podemos encontrar el detalle del producto seleccionado, visualizado a traves de ver detalle. En la ruta podemos encontrar el producto con su marca, modelo, precio, descripcion y el componente contador y boton de agregar al carrito.

- Cart ('/cart'): Renderiza los productos agregados por el usuario. Aqui podemos finalizar la compra y completar un formulario con nuestros datos, que seran enviados a la base de datos. Al final de la compra nos devolvera un id de compra para el seguimiento de nuestro pedido.

## Etapas de desarrollo:
- Se crean los primeros componentes y renderizamos para lograr visualizar el comienzo de nuestra app web.
- Se simula la conexion a una base de datos, utilizando promesas y asincronia, desde nuestro archivo 'api.js'.
- Se agrega una navegacion dinamica a traves de routing a nuestra app. Tambien agregamos eventos y context.
- Suplantamos el archivo 'api.js' por nuestra base de datos de firestore google y realizamos la conexion correctamente.
- Por ultimo se complementa la pagina con un login y una forma de pago al terminar nuestra compra en el carrito.

## Futuro del proyecto:
- Mejora en estilos.
- Aplicar auth y login.
- Aplicar metodo de pago [Mercado Pago](https://www.mercadopago.com.ar/developers/es/developer-program/checkout-pro)
- Aplicar Testing de Quality a la pagina.


## Desarrollado con:
- [Visual Studio Code](https://code.visualstudio.com/)
- [React](https://es.reactjs.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Firebase Google](https://firebase.google.com/)

**Desarrollado por Federico Ramallo:**
- [GitHub](https://github.com/fefel0)
- [Linkedin](https://www.linkedin.com/in/federico-ramallo-705704218/)

