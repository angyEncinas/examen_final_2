// T A R E A S \\
    let listaTareas = [];

    function crearTarea(nombreMateria,nombreTarea,fecha) {
        let tarea = {
            nombreMateria: nombreMateria,
            nombreTarea: nombreTarea,
            fecha: fecha,
        }
        listaTareas.push(tarea);
        return tarea;
    }

    function obtenerListaTareas() {
        return listaTareas;
    }

    function limpiarListaTareas() {
        listaTareas = [];
    }
    
    function eliminarTarea() {
        return 0;
    }

    export {crearTarea, obtenerListaTareas, limpiarListaTareas, eliminarTarea}

// M A T E R I A S \\