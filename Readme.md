# Proyecto Final Sueños:

## Carpeta Component

Esta carpera contiene los elementos:

- Boton agregar: correspondiente al item count.
- Boton detalle: correspondiente al ver detalle
- Boton Remover: se utiliza en el cartwidget y es el que permmite remover el contenido de la compra.
- Cart widget: es el carrito que luego se agrega en Navbar.
- ItemDetail: es el armado del detalle de cada producto
- Items: contiene el array clases y el armado del detalle del map del item.
- Navbar: correspondiente al armado del menu del sitio.

## Carpeta Pages

En esta carpeta vamos a encontrar los siguientes elementos:

- ItemListContaines: en esta carpeta vamos a ver que tenemos el archivo correspondiente a la seccion inicio para ver los distintos productos y para poder filtrar los mismos por categoria del menu del sitio.
- ItemDetailContainer: en esta carpeta podremos ver el archivo que permite que desde el item list container cuando clickeamos en el componente Boton detalle podamos ver en pantalla unicamente el producto seleccionado con su detalle y la opcion de agregar al carrito ya que aparece el componente Boton Agregar.
- Cartcontainer: en esta carpeta encontramos el archivo que engloba todo el carrito de compra con sus renders condicionales correspondientes y con el armado de la compra.

## Carpeta database

En esta carpeta encontramos el armchivo que permite que todo el proyecto de forma facil se vilcule con firebase (base de datos) y de esta forma acceder a toda la informacion existente en la base de datos. 
A su vez tambien se envia la información de cada compra a la base de datos y se trae el `ID`

## Carpeta store

en sta carpeta contiene los datos de los productos de la compañía que luego se pueden ver en la base de datos.

## App.js

Este archivo es el que permite que cuando enviamos en terminal `npm start` podamos ver todo lo mencionado anterior en pantalla mediante el Dom Virtual en el [http://localhost:3000].

## Dependencias instaladas:

- Bootstap
- Firebase
- Sweet Alert 2
- Vercel (deployment)



