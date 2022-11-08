const materia = document.querySelector("#nombre-materia-items");
const descripcion = document.querySelector("#descripcion-item");
const docente = document.querySelector("#docente-item");

const crear = document.querySelector("#crear-form");

const vista = document.querySelector("#vista-div");

const mensaje = "creada con exito !!!";



crear.addEventListener("submit", (event) => {
  event.preventDefault();s
  
  const materia_nombre = materia.value;
  const descripcion_text = descripcion.value;
  const docente_text = docente.value;

  vista.innerHTML = "<p>" + mensaje + "<p>" +
                    "<p> Materia:" + materia_nombre + "<p>" +
                    "<p> Tarea:" + descripcion_text + "<p>" +
                    "<p> Fecha:"+ docente_text + "<p>" +
                    "</p>";
});