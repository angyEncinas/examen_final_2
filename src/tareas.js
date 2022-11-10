import Tarea from "./tarea.js"

class Tareas{
    constructor(){
        this.listaTareas = []
    }

    guardar(tarea){
        this.listaTareas.push(tarea)
        return "tareaGuardada"
    }

}

export default Tareas