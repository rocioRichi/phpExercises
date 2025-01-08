const exercises = ["exercise1", "exercise2", "exercise3"];

let currentExerciseIndex = 0;

function loadExercise(index) {
  const exercise = exercises[index];
  if (!exercise) {
    alert("Ejercicio no encontrado.");
    return;
  }
  const url = `https://phpexercises.onrender.com/index.php?exercise=${exercise}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("exercise-container").innerHTML = data;
      currentExerciseIndex = index;
    })
    .catch((error) => {
      console.error("Error al cargar el ejercicio:", error);
      document.getElementById(
        "exercise-container"
      ).innerHTML = `<p>Error: ${error.message}</p>`;
    });
}

// Manejo de navegación
document.getElementById("prev-button").addEventListener("click", () => {
  if (currentExerciseIndex > 0) {
    loadExercise(currentExerciseIndex - 1);
  }
});
document.getElementById("next-button").addEventListener("click", () => {
  if (currentExerciseIndex < exercises.length - 1) {
    loadExercise(currentExerciseIndex + 1);
  }
});

// Cargar el primer ejercicio al inicio
loadExercise(currentExerciseIndex);
