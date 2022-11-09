const vistaDocente = document.querySelector("#paginaDocente");
const vistaEstudiante = document.querySelector("#paginaEstudiante");

vistaDocente.addEventListener("click", (event) => {
  event.preventDefault();

  document.location.href = "./docentes.html";
});

vistaEstudiante.addEventListener("click", (event) => {
  event.preventDefault();

  document.location.href = "./estudiantes.html";
});