import Tarea from "./tarea.js"

class Tareas{
    constructor(){
        this.listaTareas = [];
    }

    guardar(tarea){
        this.listaTareas.push(tarea);
        return "Tarea Guardada";
    }

}

export default Tareas