import Materia from "./materia";

const materiadada = document.querySelector("#nombre-materia-items");
const descripcion = document.querySelector("#descripcion-item");
const docente = document.querySelector("#docente-item");

const crear = document.querySelector("#crear-form");

const vista = document.querySelector("#vista-div");

const mensaje = "creada con exito !!!";



crear.addEventListener("submit", (event) => {
  event.preventDefault();
  let materia = new Materia();
  const materia_nombre = materiadada.value;
  const descripcion_text = descripcion.value;
  const docente_text = docente.value;
  materia.crearMateria(materia_nombre);
  vista.innerHTML = "<p>" + mensaje + "<p>" +
                    "<p> Materia:" + materia.obtenerNombre() + "<p>" +
                    "<p> Tarea:" + descripcion_text + "<p>" +
                    "<p> Fecha:"+ docente_text + "<p>" +
                    "</p>";
});