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
Con la finalidad de proteger mi API key personal, se ha creado un pequeño backend que se encarga...
