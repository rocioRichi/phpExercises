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

// Llama a la función con un objeto de prueba
sendData({ key: "value" });
