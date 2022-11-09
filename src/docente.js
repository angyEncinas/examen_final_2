let listaTareas = [];

function crearTarea(nombreMateria,nombreTarea,fecha)
{
    let tarea = {
        nombreMateria: nombreMateria,
        nombreTarea: nombreTarea,
        fecha: fecha,
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