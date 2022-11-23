import Tarea from "./tarea.js";

function buscar(listaTareas , titulo){
    for(let i = 0;i<listaTareas.length;i++){
        if(listaTareas[i].titulo==titulo){
            return listaTareas[i];
        }

    }
        return null;
    
}
export default buscar