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

    function eliminarTarea(name) {
        if(listaTareas.length > 0) {
            if(listaTareas[0].nameMatchs(name)) {
                listaTareas.pop();
            }
        }
        return listaTareas.length;
    }

    export {crearTarea, obtenerListaTareas, limpiarListaTareas, eliminarTarea}

// M A T E R I A S \\