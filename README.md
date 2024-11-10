# 🌤 Aplicación de Clima

Aplicación que permite consultar el clima en tiempo real para cualquier ciudad del mundo utilizando la API de OpenWeatherMap.

## 🚀 Características
- **Detalles del clima**:
  - Temperatura
  - Humedad
  - Velocidad del viento
  - Descripción general (ej. "Despejado", "Nublado")
  - Ícono representativo del clima
- **Formulario de búsqueda**:
  - Campo de entrada para el nombre de la ciudad
  - Botones para buscar y limpiar resultados
- **Interfaz visual atractiva**:
  - Diseño moderno con transiciones, bordes redondeados y efectos de neón
  - Fondos dinámicos que cambian según el clima (soleado, lluvioso, etc.)
- **Control de errores**:
  - Mensajes claros para ciudades inválidas o problemas de conexión a la API

## 🛠 Backend
- **Seguridad**: La API key se almacena en un archivo `.env`.
- **Servidor**: Express en Node.js escuchando en el puerto `3000`.
- **Ruta `/api/weather`**:
  - Recibe el nombre de la ciudad y consulta la API de OpenWeather usando Axios.
  - Devuelve los datos procesados al frontend.
- **Manejo de errores**:
  - Soporte para errores de conexión y ciudades no encontradas.
  - Configuración de CORS para permitir solicitudes desde el frontend.

---------------------------------------------------------------------------------------------------------------------------------------------

# 🌤 Weather Application

A real-time weather application for any city worldwide using the OpenWeatherMap API.

## 🚀 Features
- **Weather details**:
  - Temperature
  - Humidity
  - Wind speed
  - General description (e.g., "Clear", "Cloudy")
  - Weather icon
- **Search form**:
  - Input field for city name
  - Buttons to search and reset results
- **Modern UI**:
  - Stylish design with transitions, rounded borders, and neon title effects
  - Dynamic backgrounds that change based on weather conditions (sunny, rainy, etc.)
- **Error handling**:
  - Clear messages for invalid cities or API connection issues

## 🛠 Backend
- **Security**: API key is stored in a `.env` file.
- **Server**: Express in Node.js running on port `3000`.
- **Route `/api/weather`**:
  - Receives the city name and fetches data from the OpenWeather API using Axios.
  - Sends processed data back to the frontend.
- **Error handling**:
  - Handles connection errors and invalid cities.
  - CORS configured to allow requests from the frontend.
