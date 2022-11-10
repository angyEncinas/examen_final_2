class Tareas{
    constructor(){
        this.titulo = "";
        this.descripcion = "";
        this.materia = "";
        this.fecha = "";
    }

    crear(title, desc, mat, date){
        this.titulo = title;
        this.descripcion = desc;
        this.materia = mat;
        this.fecha = date;
        return "tareaCreada"
    }
}

export default Tareas