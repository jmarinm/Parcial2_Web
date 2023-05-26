# Parcial2_Web

Juan Carlos Marin Morales - 202013973

## Ejecucion de la aplicación

1. Descarge el repositorio back y ponerlo a correr, para esta implementación fue necesario modificar el repositorio back, los cambios son en main.ts, habilitar el cors (app.enableCors()), y cambiar el puerto en el que corre, ya que react corre en el puerto 3000, así que cambiar el puerto del back al 5001.
2. Descargue el repositorio front (este).
3. Ejecutar npm install
4. Ejecutar la aplicacion (npm run start)

## Como usar la aplicación

Al abrir la aplicación dirijase a la ruta (/login) ahí podrá ingresar correo y contraseña validos, despues de esto lo llevara a la vista /home, donde podrá ver tanto el listado de todos los libros, y podra hacer click sobre las cards para poder ver el detalle en la zona derecha, en el caso de que el login haya sido con rol Administrador, se vera el detalle con campos de texto.


## Decisiones importantes

1. Para el manejo de estilos se uso la libreria react-bootstrap, es por esto que uso mucho Container, Rows, y Cols para posicionar los elementos en las vistas. 
2. Para el manejo de la internacionalización se usa la libreria react-i18 y se guardan las cadenas en la carpeta locales en un archivo para cada idioma.
3. Otra decisión importante fue que despues del login, el usuario queda guardado en un contexto global, usando el hook de UseContext. Esto se puede ver reflejado en el archivo contexts/UserContext.js.
