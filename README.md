# Servidor con datos JSON y crear archivos CSV

## Servidor con datos JSON y EXPRESS
La lógica de este programa se encuentra en los archivos `index.js` y `service.js`
* index.js: Es donde se crea el servidor para la peticiones.
* service.js: Es donde interactuamos con el archivo JSON
* Los archivos se extraen en una variable _data_ y se modifican ahí mismo. No se escribe en el archivo JSON

## Crear archivos CSV
La lógica de este programa se encuentra en el archivo `crear_csv.js`
* Se obtienen los datos desde una API pública con AXIOS
* De los datos obtenidos se almacenan los datos necesarios.
* Se usa funciones de arrays para obtener el texto plano.
* Para escribir los datos en un archivo se usa _fs_ en su forma asíncrona de JavaScript.

## Ver el proyecto
Para ver el proyecto.
1. En una carpeta clone el repositorio `git clone ...`
2. Dentro de la carpeta use el comando `npm install`
3. Para ejecutar el servidor use el comando `npm run dev`
4. El servidor se encuentra localmente en el puerto 3000.



