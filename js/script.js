console.log("hola desde afuera");//archivo que se usa para el metodo externo
//declaración de variables
let numberOne;
let numberTwo;
let name="Michel";
let age=17;
let state;
let more;
const iva=19;//constante
console.log (`mi nombre es ${name} y tengo ${age} años, el iva de mi edad es ${age*(iva/100)}`);//usp de plantillas literales
numberOne=parseInt(prompt("Ingrese el primer número"));
numberTwo=parseInt(prompt("Ingrese el segundo número"));
more=numberOne+numberTwo;
alert("la suma es "+more);