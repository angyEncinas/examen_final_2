import Tarea from "./tarea.js"
import materias from "./materias.js"


const createForm = document.querySelector("#formBox");

const titulo = document.querySelector("#title");
const desc = document.querySelector("#description");
const sub = document.querySelector("#subject");
const date = document.querySelector("#date");

for(var i = 0, l = materias.length; i < l; i++){
  var materia = materias[i];
  sub.options.add( new Option(materia.nombre, materia.nombre) );
}


const vista = document.querySelector("#vista-div");
let divConfirmacion = document.querySelector("#msg");

const mensaje = "se creo la tarea";

let tareas = []

createForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let tarea = new Tarea();

    const tituloTarea = titulo.value;
    const descTarea =desc.value;
    const subTarea = sub.options[sub.selectedIndex].text;
    const dateTarea = date.value;


    tarea.crear(tituloTarea, descTarea, subTarea, dateTarea);
    tareas.push(tarea);

    console.log(tarea);
    


    let listaDeTareas = "";
    for(i=0;i<tareas.length;i++){
      listaDeTareas = listaDeTareas + "<p>" +  tareas[i].datosToHTML() + "</p>"; 
    }

    vista.innerHTML = "<p>" + mensaje +  "</p>";

    divConfirmacion.innerHTML = listaDeTareas;




});
