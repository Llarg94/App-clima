//  funcionalidad para comunicarse con la API y mostrar el tiempo dentro de la ciudad solicitada.

$(document).ready(function () {
  // Mostrar el video predeterminado al abrir la app
  mostrarVideoDefault();

  $("#boton1").on("click", function () {
    const city = $("#cityInput").val();

    if (city === "") {
      // Llamar a la función para establecer la imagen por defecto
      mostrarVideoDefault();
      // También puedes mostrar un mensaje de error o aviso al usuario
      alert("Por favor, introduce una ciudad.");
      return; // Salir de la función si no hay ciudad
    }
    const apiKey = "946548dc4e9c94363a97c8308e95d6b1";

    // if ($("#cityInput").isEmpty) {
    //   alert("Ups, creo que no has introducido ninguna ciudad...");
    // }

    $.ajax({
      type: "GET",
      url: `http://localhost:3000/api/weather?city=${city}`, // **Usa la URL de tu backend en lugar de OpenWeather**
      dataType: "json",
      success: function (response) {
        mostrarDatos(response);
        cambiarFondo(response); // Cambiar el fondo según el clima
      },
      error: function () {
        alert(
          "No se pudo encontrar la ciudad. Verifica el nombre e intenta de nuevo."
        );
      },
    });
  });

  $("#boton2").on("click", function () {
    $("#cityInput").val(""); //limpiar el campo de entrada de ciudad
    $("#personalTable tbody").empty(); //limpiar los datos de la tabla
    mostrarVideoDefault(); // Mostrar el video predeterminado
  });
});

// Función para mostrar el video predeterminado
function mostrarVideoDefault() {
  // Ocultar todos los videos
  $(".fondo-video").each(function () {
    this.pause();
    $(this).hide();
  });

  // Mostrar el video predeterminado y reproducirlo
  $("#videoDefault").show()[0].play();
}

//funcion para msotrar los datos en la tabla
function mostrarDatos(data) {
  const tbody = $("#personalTable tbody");
  tbody.empty(); //Limpiamos la tabla antes de agregar nuevos datos

  const row = `
        <tr>
            <td>${data.name}</td>
            <td>${data.main.temp} ºC</td>
            <td>${data.main.humidity} %</td>
            <td>${data.wind.speed} m/s</td>
            <td>${data.weather[0].description}</td>
            <td><img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="${data.weather[0].description}" /></td>
        </tr>
    `;

  tbody.append(row); //agregar la fila a la tabla
}

//funcion para cambiar el fondo segun el clima
function cambiarFondo(data) {
  // Ocultar todos los videos primero
  $(".fondo-video").each(function () {
    this.pause(); // Pausa el video para evitar consumo de recursos
    $(this).hide();
  });
  let videoId;

  // Determinar el video según el clima
  switch (data.weather[0].main) {
    case "Clear":
      videoId = "#videoClear";
      break;
    case "Clouds":
      videoId = "#videoClouds";
      break;
    case "Rain":
      videoId = "#videoRain";
      break;
    case "Snow":
      videoId = "#videoSnow";
      break;
    case "Fog":
    case "Mist":
      videoId = "#videoFog";
      break;
    default:
      videoId = "#videoDefault"; // Video predeterminado si no se encuentra el clima
  }

  // Mostrar y reproducir el video adecuado
  $(videoId).show()[0].play();
}
