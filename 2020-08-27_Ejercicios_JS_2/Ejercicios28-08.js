/*11- Crea una clase Persona que tenga los atributos nombre y edad. Además agregale un método presentarse() que como resultado imprima un mensaje diciendo su nombre y edad.*/

class Persona {

	constructor(nombre, edad) {
		this.nombre = nombre;
		this.edad = edad;
	}

	presentarse(){
		return console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + "años.");
	}

}

var persona = new Persona("Federico", 26);
console.log(persona.presentarse());


/*12- Crea una clase Estudiante (que herede de Persona) que tenga un atributo profesor y
tenga dos métodos.
El método estudiando() que imprime el mensaje “Estudiando con ” y el nombre del profesor
con el que se encuentra estudiando.
El método setProfesor(profesor) que setea con qué profesor se encuentra estudiando.*/

class Estudiante extends Persona{

	constructor(nombre, edad, profesor) {
		super(nombre, edad);
		this.profesor = profesor;
	}
	
	setProfesor(profesor){
		this.profesor = profesor;
	}

	estudiando(){
		return console.log("Estudiando con " + this.profesor);
	}
	
}

var estudiante1 = new Estudiante("Martin", 20, "Marcelo");
var estudiante2 = new Estudiante("Jose", 25, "Christian");
var estudiante3 = new Estudiante("Carlos", 20, "Christian");
var estudiante4 = new Estudiante("María", 20, "Christian");

estudiante1.setProfesor("Christian");

estudiante1.estudiando();


/*13- Crea una clase Profesor (que herede de Persona) que tenga un atributo estudiantes con
un array de Estudiante. Además debe tener dos métodos enseñando() que imprima por
consola todos sus estudiantes a los cuales les está enseñando y el método
addEstudiante(unEstudiante) que agregue a ese estudiante a la lista. Además este método
es responsable de manejar de agregar al objeto profesor como profesor del estudiante
(manejo de doble referencia)*/

class Profesor extends Persona{
	
	constructor(nombre, edad, estudiantes) {
		super(nombre, edad);
		this.estudiantes = estudiantes;
	}
	
	enseñando(){
		console.log("Le estoy eseñando a: ");
		this.estudiantes.forEach(element => console.log(element.nombre + "\n"));
	}
	
	addEstudiante(unEstudiante){
		this.estudiantes.push(unEstudiante);
		unEstudiante.setProfesor(this.nombre);
	}
	
}

var profesor = new Profesor("Christian", 25, [estudiante1,estudiante2,estudiante3,estudiante4]);

profesor.enseñando();

var estudiante5 = new Estudiante("Rodrigo", 20, "Carlos");

profesor.addEstudiante(estudiante5);