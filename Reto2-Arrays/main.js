class Alumno {
  constructor(nombre, apellido, id, edad, notas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.id = id;
    this.edad = edad;
    this.notas = notas;
    this.cursosAprobados = [];
  }

  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }

  verificarNotas() {
    if (this.notas >= 0 && this.notas <= 24) {
      return true;
    } else if (this.notas >= 25 && this.notas <= 50) {
      return false;
    }
  }

  mostrarAlumno() {
    /* console.log(
      `Hola ${this.nombre} ${this.apellido} tu ID es: ${this.id}, tu edad es: ${this.edad} ${this.id}, tus notas suman ${this.notas}, cursos aprobados ${this.cursosAprobados}`
    ); */
    alert(
      `Hola ${this.nombre} ${this.apellido} tu ID es: ${this.id}, tu edad es: ${this.edad}, tu id es: ${this.id}, tus notas suman ${this.notas}, cursos aprobados ${this.cursosAprobados}`
    );
  }
}

let agregarAlumnos = Number(prompt("cuantos alumnos desea agregar?"));

for (let i = 1; i <= agregarAlumnos; i++) {
  const nombre = prompt(`Ingrese el nombre del alumno ${i}`);
  const apellido = prompt(`Ingrese el apellido del alumno ${i}`);
  const id = prompt(`Ingrese el id del alumno ${i}`);
  const edad = prompt(`Ingrese la edad del alumno ${i}`);
  const notas = prompt(`Ingrese el TOTAL de notas del alumno ${i}`);

  const alumno = new Alumno(nombre, apellido, id, edad, notas);

  const materia = prompt("ingrese la materia aprobada: ");
  alumno.aprobarCurso(materia);

  alumno.mostrarAlumno();

  if (alumno.verificarNotas()) {
    alert(`aprobaste el semestre con ${notas}`);
  } else {
    alert(`NO aprobaste el semestre con ${notas}`);
  }
}
/* 
const alumno1 = new Alumno(
    "Jhoana",
    "Espana",
    12345,
    34,
    [
      "Matematicas",
      "Ingles"
    ],
  ); */
