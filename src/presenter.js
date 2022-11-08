//import sumar from "./sumador";

const materias = document.querySelector("#materias-items");
const tarea = document.querySelector("#tarea-item");
const fecha = document.querySelector("#fecha-item");

const crear = document.querySelector("#crear-form");

const vista = document.querySelector("#vista-div");

const mensaje = "Tarea creada con exito !!!";

crear.addEventListener("submit", (event) => {
  event.preventDefault();

  const MateriasList = materias.value;
  const Tarea_Text = tarea.value;
  const Fecha_Text = fecha.value;

  vista.innerHTML = "<p>" + mensaje + "<p>" +
                    "<p> Materia:" + MateriasList + "<p>" +
                    "<p> Tarea:" + Tarea_Text + "<p>" +
                    "<p> Fecha:"+ Fecha_Text + "<p>" +
                    "</p>";
});
