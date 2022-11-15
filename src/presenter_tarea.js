import Tarea from "./tarea.js"


const titulo = document.querySelector("#title");
const desc = document.querySelector("#description");
const sub = document.querySelector("#subject");
const date = document.querySelector("#date");


const createForm = document.querySelector("#formBox");

const vista = document.querySelector("#vista-div");
let divConfirmacion = document.querySelector("#msg");

let mensaje = "";

let listaTareas = []

createForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let tarea = new Tarea();

    const titutloTarea = titulo.value;
    const descTarea =desc.value;
    const subTarea = sub.options[sub.selectedIndex].text;
    const dateTarea = date.value;



    console.log(titutloTarea, descTarea, subTarea, dateTarea);
    tarea.crear(titutloTarea, descTarea, subTarea, dateTarea);
    
    listaTareas.push(tarea);

     mensaje = tarea.crear();


    let listaParaMostrar = "";
    for(i=0;i<listaTareas.length;i++){
      listaParaMostrar = listaParaMostrar + "<p>" +  listaTareas[i].mostrar() + "</p>"; 
    }

    vista.innerHTML = "<p>" + mensaje +  "</p>";

    divConfirmacion.innerHTML = listaParaMostrar;




});
  

