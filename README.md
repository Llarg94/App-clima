Español
Aplicación de Clima
Aplicación para consultar el clima en tiempo real para cualquier ciudad del mundo usando la API de OpenWeatherMap.

Características:
Detalles del clima: Temperatura, humedad, velocidad del viento, descripción general e ícono representativo.
Formulario de búsqueda: Campo de entrada para ciudad y botones para buscar y limpiar resultados.
Interfaz visual atractiva: Diseño moderno con transiciones y fondos dinámicos que cambian según el clima (día soleado, lluvioso, etc.).
Control de errores: Mensajes claros para ciudades inválidas o problemas de conexión.
Backend:
Seguridad: API key almacenada en .env.
Servidor: Express en Node.js escuchando en el puerto 3000.
Ruta /api/weather: Recibe el nombre de la ciudad y devuelve los datos climáticos.
Manejo de errores: Soporte para errores de conexión, ciudades no encontradas y configuración de CORS.

-----------------------------------------------------------------------------------------------------------------------------------------------
English
Weather Application
A real-time weather application for any city worldwide using the OpenWeatherMap API.

Features:
Weather details: Temperature, humidity, wind speed, general description, and weather icon.
Search form: Input field for city name with search and reset buttons.
Modern UI: Stylish design with transitions and dynamic backgrounds based on the weather (e.g., sunny, rainy).
Error handling: Clear messages for invalid cities or connection issues.
Backend:
Security: API key stored in .env.
Server: Express in Node.js running on port 3000.
Route /api/weather: Receives city name and returns weather data.
Error handling: Handles connection errors, invalid cities, and CORS configuration.
