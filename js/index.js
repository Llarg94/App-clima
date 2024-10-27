require("dotenv").config();
const axios = require("axios");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;
app.use(cors());

const apiKey = process.env.API_KEY; // Carga la API key desde las variables de entorno

app.get("/api/weather", async (req, res) => {
  const city = req.query.city;
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    res.json(response.data);
  } catch (error) {
    res
      .status(error.response.status)
      .json({ message: error.response.data.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
