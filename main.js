const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso 1",
        "Curso 2",
    ],
    aprobarCurso: function(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    }
};

natalia.cursosAprobados.push("Curso 3");

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
//    this.aprobarCurso = function (nuevoCurso){
//        this.cursosAprobados.push(nuevoCurso)
    }
    
    Student.prototype.aprobarCurso = function (nuevoCurso){
    this.cursosAprobados.push(nuevoCurso)
    }

const juanito = new Student(
    "Juanito Perez",
    45,
    [
        "curso 9"
    ],
)