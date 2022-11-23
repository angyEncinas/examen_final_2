class Tarea{
    constructor() {
        this.titulo = "";
        this.descripcion = "";
        this.materia = "";
        this.fecha = "";
        this.estudiantes;
      //  this.estimacion ;


    }

    getTitulo(){
        return this.titulo;
    }

    getDescripcion(){
        return this.descripcion;
    }
    getMateria(){
        return this.materia;
    }

    getFecha(){
        return this.fecha;
    }


    crear(title, desc, mat, date){
        if (title==""|| desc==""|| mat==""|| date=="")
        {
            return false;
        }
        this.titulo = title;
        this.descripcion = desc;
        this.materia = mat;
        this.fecha = date;
        this.estudiantes = 0;
        return true;


    }

    getStudents(){
        return this.estudiantes;

    }

    setStudent()
    {
        this.estudiantes++;
    }

    getDetalles(){
        let cadenaDatos = "<p>" + "tarea:" + this.titulo + " , " +
        " descripcion:" + this.descripcion + " , " +
        " materia:" + this.materia + " , " +
        " fecha:" + this.fecha +"</p>";
        return cadenaDatos;    
    }

    getDetallesBrief(){
        let cadenaDatos = "<p>" + "tarea:" + this.titulo + " , " +
        "materia:" + this.materia + "(" + this.estudiantes + ")" + "</p>";
        return cadenaDatos;    
    }




    eliminar(){
        this.titulo = "";
        this.descripcion = "";
        this.materia = "";
        this.fecha = "";
        this.estudiantes = 0;
    }

    




}

export default Tarea
