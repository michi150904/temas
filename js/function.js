//agrupacion de instrucciones con una misma funcion
// primero definir el nombre de la funcion y las tareas a realizar
// segundo invocar o llamar la funcion

//metodos de defincion de funciones

// funcion por declaracion
// 1 declarar la funcion

function saludar (/*parametros*/){
// cuerpo de la funcion
console.log("Buenos dias por la mañana");
}

//invocacion de la funcion

saludar();

// las funciones por declaracion se pueden onvocar en cualquier linea de codigo

let numberOne=parseInt(prompt("Ingrese el primer número"));
let numberTwo=parseInt(prompt("Ingrese el segundo número"));

function sumar1 (){
    console.log (`la suma entre ${numberOne} y ${numberTwo} es ${numberOne+numberTwo}`);

}

sumar1();
// funcion con parametros
function sumar (n1,n2){
    console.log (`la suma entre ${n1} y ${n2} es ${n1+n2}`);

}

sumar(numberOne,numberTwo);//invocacion con argumentos

// funciones con valor de retorno
//devolver el valor de retorno
function sumar2(n1,n2){
    let suma=n1+n2;
    return suma;
}

console.log (`la suma es ${sumar2(15,26)}`) //invocar en un anuncio
let resultado=sumar2(numberOne,numberTwo);// invocacion guardada en una variable


//funcion por expresion
// funcion que queda almacenada en una variable
// solo se puede llamar despues de la creacion

let restar= function restar (n1,n2){
    console.log (`la resta entre ${n1} y ${n2} es ${n1-n2}`);

}

restar (n1,n2);// una funcion por expresion se invoca con el nombre de la variable

// funcion anonima
//la funcion no tiene nombre
// es parecida a la funcion por expresion
let multi=function(n1,n2){
return n1*n2;
}

console.log(`la multiplicacion de los numeros es ${multi(numberOne,numberTwo)}`)

//funcion arrow o flecha
// no usa la palabra reservada function
// se especifiica mediante una flecha =>

let div=(n1,n2)=>{
    console.log(`la division entre ${n1} y ${n2} es ${n1/n2}`)
}

div (numberOne,numberTwo);