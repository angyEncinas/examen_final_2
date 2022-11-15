import Tarea from "./tarea.js"


const title = document.querySelector("#title");
const desc = document.querySelector("#description");
const sub = document.querySelector("#subject");
const date = document.querySelector("#date");
const registerButton = document.querySelector("#btn");
let divConfirmacion = document.querySelector("#msg");
let divGuardado = document.querySelector("#msgSave");
let listaTareas = []

registerButton.addEventListener("click", (event) => {
    event.preventDefault();

    let tarea = new Tarea();
    tarea.crear(title.value, desc.value, sub.value, date.value);
    listlistaTareasaMat.push(tarea);

    let mensaje = tarea.mostrar();


    let listaParaMostrar = "";
    for(i=0;i<listaTareas.length;i++){
      listaParaMostrar = listaParaMostrar + listaTareas[i].mostrar(); 
    }
    listaMaterias.innerHTML = listaParaMostrar;
          
    divConfirmacion.innerHTML = "<p>"+mensaje+"</p>";
    divGuardado.innerHTML = "<p>"+mensaje2+"</p>";
});
  

