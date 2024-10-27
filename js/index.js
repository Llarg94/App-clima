// index.js
const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config(); // Carga las variables de entorno desde .env

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta para manejar la solicitud del clima
app.get("/api/weather", async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.API_KEY;

  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather`,
      {
        params: { q: city, appid: apiKey, units: "metric" },
      }
    );

    res.json(response.data); // Devuelve la respuesta al frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener datos de la API" });
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
