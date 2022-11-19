class Tarea{
    constructor(){
        this.titulo = "";
        this.descripcion = "";
        this.materia = "";
        this.fecha = "";
        this.estado = "";

    }

    obtenerTitulo(){
        return this.titulo;
    }

    obtenerDescripcion(){
        return this.descripcion;
    }
    obtenerMateria(){
        return this.materia;
    }

    obtenerFecha(){
        return this.fecha;
    }
    obtenerEstado(){
        return this.estado;
    }


    crear(title, desc, mat, date){
        this.titulo = title;
        this.descripcion = desc;
        this.materia = mat;
        this.fecha = date;
        this.estado = "pendiente";

    }

    datosToHTML(){
        let cadenaDatos = "<p> tarea:" + this.titulo + " , " +
        " descripcion:" + this.descripcion + " , " +
        " materia:" + this.materia + " , " +
        " fecha:" + this.fecha +"</p>";
        return cadenaDatos;    
    }



    eliminar(){
        this.titulo = "";
        this.descripcion = "";
        this.materia = "";
        this.fecha = "";
        this.estado = "";
    }

/** 
    isFromSubject(materia)
    {
        if (materia == this.materia)
        {
            return true;
        }
    }
    */
}

export default Tarea

