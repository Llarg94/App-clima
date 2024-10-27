Aplicación que permite a los usuarios consultar el clima en tiempo real
para cualquier ciudad del mundo. Utilizando la API de un servicio meteorológico
gratuito, en OpenWeatherMap y mostramos detalles como:
    - La temperatura
    - La humedad
    - La velocidad del viento 
    - Una descripción general del clima 
    - Icono ilustrativo del tiempo

Características:
    Formulario de búsqueda de ciudad:
        - Un campo de entrada para que el usuario escriba el nombre de la ciudad.
    Botones:
        - Un botón de búsqueda para consultar el clima de la ciudad ingresada.
        - Un botón para limpiar la ciudad buscada y la información de la tabla.

Objetivo:
Mostrar la temperatura actual, la humedad, el viento y la descripción general (ej., “Despejado”, “Nublado”) junto con un ícono representativo del clima.
Estilo visual atractivo:
Crear una interfaz intuitiva y atractiva con CSS, añadiendo transiciones, bordes redondeados, y detalles visuales modernos, como los titulos con efecto de neon.
Se han incluido fondos dinámicos que cambian según el tipo de clima (por ejemplo, un fondo/video corto claro para un día soleado, y uno nublado con lluvia para un día lluvioso).

Control de errores:
Se muestra un mensaje claro en caso de que el usuario ingrese una ciudad no válida o haya un problema al conectarse a la API.

Creación de un backend: index.js
Para proteger la API key de OpenWeather, se creó un backend utilizando Express. Este backend se encarga de lo siguiente:

Configuración: Se usa un archivo .env para almacenar la API key de forma segura.

Servidor: Se configura un servidor Express que escucha en el puerto 3000.

Ruta /api/weather: Esta ruta recibe el nombre de una ciudad y hace una solicitud a la API de OpenWeather usando Axios.

Respuesta: Se procesan los datos recibidos y se envían de vuelta al frontend.

Errores: Se manejan posibles errores, como claves inválidas o ciudades no encontradas.
CORS: Se configura CORS para permitir solicitudes desde el frontend en un puerto diferente.
