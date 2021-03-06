//1- Imprimir por consola un mensaje guardado en una variable usando la función console.log()
    var texto = "Hola!";
    console.log(texto);




//2- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función console.log()
    var meses = ["Enero","Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    
    for(i=0;i<meses.length;i++){
        console.log(meses[i]);
    }

    //ó:

    meses.forEach(mes => console.log(mes));





//3- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

    function esPar(numero){
        if(numero % 2==1){                 //Con el % valido el resto. Si sobra uno, es impar
            console.log("Es Impar");
        }else{
            console.log("Es Par");
        } 
    }
    
    //Test:
    esPar(2);
    esPar(3);





//4- Define una función que dado un array de números nos dice si alguno es par.
    //Seteo de variables
    var arrayDeNumerosImpares   = [1,3,5,7,9];
    var arrayDeNumerosPares     = [2,4,6,8,10];

    //Funcion
    function algunoEsPar(array){
        console.log(array.some((val) => val % 2 == 0));
    }

    //Test
    algunoEsPar(arrayDeNumerosImpares);
    algunoEsPar(arrayDeNumerosPares);





//5- Define la función aprobó, que dada la lista de las notas de un alumno devuelve si el alumno aprobó. Un alumno aprobó si todas sus notas son mayores o iguales a 4
    //Defino el array:
    arrayDeNotasDesaprobado = [8,6,2,4];
    arrayDeNotasAprobado    = [8,6,8,4];

    //Funcion
    function aprobo(array){
        console.log(array.every(val => val>=4));
    }

    //Test
    aprobo(arrayDeNotasDesaprobado);
    aprobo(arrayDeNotasAprobado);





//6- Define la función quienesAprobaron, que dada la información de un curso devuelve la información de los alumnos que aprobaron. Podés usar la función que hiciste en el ejercicio anterior.
    //Seteo del array
    var notasCurso = [[6,7,8],[1,1,1],[10,10,10]];
        
    //Funcion
    function alumnosAprobados(arrayOfArrays){
        console.log(
            arrayOfArrays.filter(array => array.every(val => val>=4)));
    }

    //Test
    alumnosAprobados(notasCurso);





//7- Define la función hayAlgunNegativo, que dada una lista de números nos dice si hay algún negativo
    //Definicion de los array
    arrayConNegativos = [1,-3,4]
    arraySinNegativos = [1,3,4]
​
    //Funcion
    function hayAlgunNegativo(array){
        console.log(array.some(val => val<0));
    }

    //Test
    hayAlgunNegativo(arrayConNegativos);
    hayAlgunNegativo(arraySinNegativos);






//8- Escribi una función cuantosCumplen que dada una condición y una lista, diga cuantos elementos la cumplen

    //Defino el array
    arrayCuantosCumplen = [0,1,2,3,4];

    //Ejercicio inicial: Contiene errores. Mas abajo se detalla la corrección del mismo.
    /*
    //Defino la función even, que devuelve true o false si es par o impar respectivamente.
    function even(numero){
        if(numero % 2==1){
            return false;
        }else{
            return true;
        } 
    }
	
    //Creo la función cuantosCumplen()
	function cuantosCumplen(array){
        console.log(array.filter(element => even(element)).length);
    }

    //Test
    cuantosCumplen(arrayCuantosCumplen); //Debe devolver 3 (0, 2 y 4)
	*/
    




    //SE CORRIGE EJERCICIO 8, para que sea tomado desde la función cuantosCumplen(funcCondicion, arrayElem):
    
    //Creo la función condición que detallará los pares
    var funcCondicion = (element) => element % 2 === 0;

    // Creo la función cuantosCumplen()
    function cuantosCumplen (funcionCondicion, array){
        array = arrayCuantosCumplen.filter(funcionCondicion);
        return console.log(array.length);
    } 

    //Testeo la función
    cuantosCumplen(funcCondicion, arrayCuantosCumplen); //Debe devolver 3 (0, 2 y 4)






    
//9- Escribí una función rechazar, que dada una condición y un array, devuelva un array con los elementos que no la cumplen

    //Defino el array
    arrayRechazar = [0,1,2,7,9,87,42];

    // Se corrige el ejercicio tal cual fue solicitado. A continuación está el codigo anterior y mas abajo el nuevo código.
    /*
    //Creo la función cuantosCumplen()
    function rechazar(array){
        console.log(array.filter(element => !even(element)));
    }

    //Test
    rechazar(arrayRechazar); //Debe devolver [7, 9, 87]

    */






    //CORRECCIÓN EJERCICIO 9: Ahora creo la función rechazar, donde le paso los parámetros de la función condición y el array, de los que listará los elementos que no sean mayores a 10.

    //Creo la función condición que devolvera un array con los elementos que NO sean mayores a 10
    const funcCondicion = (element => !(element>10));

    // Creo la función rechazar()
    function rechazar(funcionCondicion, array){
        array = arrayRechazar.filter(funcionCondicion);
        return console.log(array);
    } 

    //Testeo la función
    rechazar(funcCondicion, arrayRechazar); //Debe devolver 5 (0, 1, 2, 7 y 9)


//10- Contiene - some
    //Defino los arrays
    var array1 = [0,1,2,3,4];
    var array2 = [5,6,7,8,9];

    //Funcion
    function contiene(numero, array){ 
        console.log(array.some((element) => element===numero));
    }

    //Test
    contiene(8,array1);
    contiene(8,array2);