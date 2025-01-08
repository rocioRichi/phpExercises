import BACKEND_URL from "./config.js";

// Función para enviar datos al backend
async function sendData(data) {
  try {
    const response = await fetch(`${BACKEND_URL}/endpoint`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();
    console.log("Respuesta del backend:", result);
  } catch (error) {
    console.error("Error al conectar con el backend:", error);
  }
}

document.getElementById("load-exercise").addEventListener("click", () => {
  const url = "https://phpexercises.onrender.com/index.php?exercise=exercise1";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor.");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("exercise-container").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error al cargar el ejercicio:", error);
      document.getElementById("exercise-container").innerHTML =
        "<p>Error al cargar el ejercicio. Por favor, inténtalo de nuevo más tarde.</p>";
    });
});

// Manejo del evento de navegación
document
  .querySelector("navigation-buttons")
  .addEventListener("navigate", (event) => {
    if (event.detail === "previous") {
      alert("Navegar al ejercicio anterior");
    } else if (event.detail === "next") {
      alert("Navegar al siguiente ejercicio");
    }
  });
