// Constructor para añadir y modificar tarea.
class Tarea{
    constructor(nombreMateria,nombreTarea,fecha) {
        this.nombreMateria = nombreMateria;
        this.nombreTarea = nombreTarea;
        this.fecha = fecha;
    }
    obtenerObjetoTarea() {
        return {
            nombreMateria: this.nombreMateria,
            nombreTarea: this.nombreTarea,
            fecha: this.fecha,
        }
    }
    //Tareas dentro mismas materias
    nombresIguales(nombreMateria) {
        return this.nombreMateria == nombreMateria;
    }
}

export default Tarea;
