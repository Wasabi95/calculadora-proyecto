//muestra mensaje de bienvenida
alert('Hola, bienvenidos a la calculadora');

//solicita al usuario que ingrese el primer numero y lo convierta en punto decimal 
var numero1 = parseFloat(prompt("Por favor ingresa un numero"));

// Muestra el numero ingresado por el usuario
alert("Elegiste el numero " + numero1);

// solicita al usuario que ingrese el segundo numero y lo convierta en flotante
var numero2 = parseFloat(prompt("Por favor ingresa otro numero"));
//muestra el segundo numero ingresado por el usuario
alert("Elegiste el numero " + numero2);

//solciita al usuario que elija una operacion
alert("Elige la operacion que deseas hacer con los numeros " + numero1 + " y " + numero2);

// solicita al usuario que elija una operacion y la convieerta a un numero entero
var operacion = parseInt(prompt("Elige una opcion. \n1 es suma. \n2 es resta. \n3 es multiplicacion. \n4 es division"));

// variable para almacenar el resultado
var resultado;

// variable para almacenar el nimbre de la operacion relaizada
var nombre = "";

//verifica que operacion ha elejida y realize la operacion correspondiente
if (operacion == 1) {
    resultado = numero1 + numero2;
    nombre = " La suma es " + resultado;
} else if (operacion == 2) {
    resultado = numero1 - numero2;
    nombre = " La resta es " + resultado;
} else if (operacion == 3) {
    resultado = numero1 * numero2;
    nombre = " La multiplicacion es " + resultado;
} else if (operacion == 4) {
    if (numero2 !== 0) {
        resultado = numero1 / numero2;
        nombre = " La division es " + resultado;
    } else {
        nombre = "No se puede dividir por 0";
    }
} else {
    nombre = "Operacion no valida";
}

// muestra el resultado de la operacion
alert(nombre);

// muestra los numeros ingresados por el usuario y el resultado de la operacion
document.write("Los numeros que ingresaste fueron " + numero1 + " y " + numero2 + " y el resultado de la operacion de " + nombre);
