const exercises = ["exercise1", "exercise2", "exercise3", "1", "1Destino"];
let currentExerciseIndex = 0;

// Carga dinámica de un ejercicio
function loadExercise(index) {
  if (index < 0 || index >= exercises.length) {
    alert("No hay más ejercicios en esta dirección.");
    return;
  }

  const exerciseId = exercises[index];
  const url = `https://phpexercises.onrender.com/index.php?exercise=${exerciseId}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("exercise-container").innerHTML = data;
      currentExerciseIndex = index; // Actualiza el índice actual
    })
    .catch((error) => {
      console.error("Error al cargar el ejercicio:", error);
      document.getElementById(
        "exercise-container"
      ).innerHTML = `<p>Error: ${error.message}</p>`;
    });
}

// Manejo de navegación con botones
document.getElementById("prev-button").addEventListener("click", () => {
  loadExercise(currentExerciseIndex - 1);
});

document.getElementById("next-button").addEventListener("click", () => {
  loadExercise(currentExerciseIndex + 1);
});

// Manejo del botón "Índice de Ejercicios"
document.getElementById("index-button").addEventListener("click", () => {
  const container = document.getElementById("exercise-container");

  // Cargar el índice de ejercicios usando fetch
  fetch("https://phpexercises.onrender.com/exercise-index.php")
    .then((response) => response.text())
    .then((data) => {
      container.innerHTML = data;

      // Agregar eventos a los botones de ejercicio cargados dinámicamente
      const buttons = document.querySelectorAll(".load-exercise");
      buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
          const exerciseId = button.getAttribute("data-id"); // Obtener el ID del ejercicio
          const exerciseIndex = exercises.indexOf(exerciseId); // Buscar el índice en el array de ejercicios
          if (exerciseIndex >= 0) {
            loadExercise(exerciseIndex); // Cargar el ejercicio
          }
        });
      });
    })
    .catch((error) => {
      console.error("Error al cargar el índice:", error);
      container.innerHTML = `<p>Error al cargar el índice.</p>`;
    });
});

// Cargar el primer ejercicio o índice al inicio
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("exercise-container");

  // Verifica si ya tiene contenido
  if (!container.innerHTML.trim()) {
    // Carga el índice si no hay contenido
    fetch("https://phpexercises.onrender.com/exercise-index.php")
      .then((response) => response.text())
      .then((data) => {
        container.innerHTML = data;

        // Agregar eventos a los botones de ejercicio cargados dinámicamente
        const buttons = document.querySelectorAll(".load-exercise");
        buttons.forEach((button, index) => {
          button.addEventListener("click", () => {
            const exerciseId = button.getAttribute("data-id"); // Obtener el ID del ejercicio
            const exerciseIndex = exercises.indexOf(exerciseId); // Buscar el índice en el array de ejercicios
            if (exerciseIndex >= 0) {
              loadExercise(exerciseIndex); // Cargar el ejercicio
            }
          });
        });
      })
      .catch((error) => {
        console.error("Error al cargar el índice:", error);
        container.innerHTML = `<p>Error al cargar el índice.</p>`;
      });
  }
});
