const materia = document.querySelector("#materia-items");
const tarea = document.querySelector("#tarea-item");
const fecha = document.querySelector("#fecha-item");

const crear = document.querySelector("#crear-form");

const vista = document.querySelector("#vista-div");

const mensaje = "Tarea creada con exito !!!";

crear.addEventListener("submit", (event) => {
  event.preventDefault();

  const MateriaList = materia.value;
  const TareaText = tarea.value;
  const FechaText = fecha.value;

  vista.innerHTML = "<p>" + mensaje + "<p>" +
                    "<p> Materia: " + MateriaList + "<p>" +
                    "<p> Tarea: " + TareaText + "<p>" +
                    "<p> Fecha: "+ FechaText + "<p>" +
                    "</p>";
});
