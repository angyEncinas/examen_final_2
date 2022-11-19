import Tarea from "./tarea.js"
import Materia from "./materia";

//import materias from "./materias.js"


const createForm = document.querySelector("#formBox");

const titulo = document.querySelector("#title");
const desc = document.querySelector("#description");
const sub = document.querySelector("#subject");
const date = document.querySelector("#date");






const materiadada = document.querySelector("#nombre-materia-items");
const docente = document.querySelector("#docente-item");

const crear = document.querySelector("#crear-form");

const vistaMat = document.querySelector("#vistaMat-div");

const mensajeMat = "creada con exito !!!";
const divMaterias = document.querySelector("#lista-materias-div");

let nuevasMaterias = []






const vista = document.querySelector("#vista-div");
let divConfirmacion = document.querySelector("#msg");

const mensaje = "se creo la tarea";

let tareas = []






crear.addEventListener("submit", (event) => {
  event.preventDefault();
  const materia_nombre = materiadada.value;
  const docente_text = docente.value;

  let materia = new Materia();
  materia.crearMateria(materia_nombre,docente_text);
  nuevasMaterias.push(materia);

  vistaMat.innerHTML = "<p>" + mensajeMat + "<p>" +
                    "</p>";

  let stringMaterias = "";

  sub.options[sub.options.length] = new Option(materia_nombre,materia_nombre);


  for(i=0;i<nuevasMaterias.length;i++){
    stringMaterias = stringMaterias + nuevasMaterias[i].obtenerTodosLosDatos();
  }
  divMaterias.innerHTML = stringMaterias;


  

                    
});







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
