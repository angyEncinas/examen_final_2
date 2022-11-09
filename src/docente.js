let listaTareas = [];

function crearTarea(nombreMateria,nombreTarea,fechaInicio,fechaFin)
{
    let tarea = {
        nombreMateria: nombreMateria,
        nombreTarea: nombreTarea,
        fechaInicio: fechaInicio,
        fechaFin: fechaFin,
    }
    listaTareas.push(tarea);
    return tarea;
}

function obtenerListaTareas()
{
    return listaTareas;
}
function limpiarListaTareas()
{
    listaTareas = [];
}

export {crearTarea, obtenerListaTareas, limpiarListaTareas}