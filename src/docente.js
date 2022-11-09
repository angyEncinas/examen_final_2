import Tarea from "./tarea.js"
// T A R E A S \\
    let listaTareas = [];

    function crearTarea(nombreMateria,nombreTarea,fecha) {
        let tarea = new Tarea(nombreMateria,nombreTarea,fecha);
        listaTareas.push(tarea);
        return tarea.obtenerObjetoTarea();
    }

    function obtenerListaTareas() {
        return listaTareas;
    }

    function limpiarListaTareas() {
        listaTareas = [];
    }

    function eliminarTarea(nombre) {
        if(listaTareas.length > 0) {
            if(listaTareas[0].nombresIguales(nombre)) {
                listaTareas.pop();
            }
        }
        return listaTareas.length;
    }

    export {crearTarea, obtenerListaTareas, limpiarListaTareas, eliminarTarea}

// M A T E R I A S \\