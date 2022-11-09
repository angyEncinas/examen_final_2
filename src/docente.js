function crearTarea(nombreMateria,nombreTarea,fechaInicio,fechaFin)
{
    let tarea = {
        nombreMateria: nombreMateria,
        nombreTarea: nombreTarea,
        fechaInicio: fechaInicio,
        fechaFin: fechaFin
    }
    return tarea
}

export {crearTarea}