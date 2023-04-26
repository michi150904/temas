console.log("hola desde afuera");//archivo que se usa para el metodo externo
//declaración de variables
let numberOne;
let numberTwo;
let name="Michel";
let age=17;
let state;
let more;
const iva=19;//constante
//console.log (`mi nombre es ${name} y tengo ${age} años, el iva de mi edad es ${age*(iva/100)}`);//usp de plantillas literales
numberOne=parseInt(prompt("Ingrese el primer número"));
numberTwo=parseInt(prompt("Ingrese el segundo número"));
//more=numberOne+numberTwo;
//alert("la suma es "+more);

//condicionales
if (numberOne>numberTwo) {
   alert(`El número mayor es ${numberOne}`);
} 
else if(numberOne===numberTwo){
    alert(`Son los numeros iguales`);
}
else {
    alert(`El número mayor es ${numberTwo}`)
}

//operador ternario condicional
//let numMayor=parseInt(numberOne>numberTwo)
//?"el numero mayor es el primero"
//:"el numero mayor es el segundo";
//console.log(numMayor);

//ciclo for determinado

for (let i=1;i<=5;i++){// variable local, rango de 1 a 5, recorre cinco posiciones, se repite 5 veces
    console.log("Hola, esoty dentro del ciclo");
}

//ciclo while indeterminado

seguir=="si";//variable de inicialización
while (seguir=="si")
{
    console.log("Hola estoy adentro del ciclo");
    seguir=prompt("Desea continuar si, no")//metodo para controlar la repeticion del ciclo
}

seguir1==1;
while (seguir1==1){
    console.log("Hola estoy adentro del ciclo");
    seguir=parseInt(prompt("Desea continuar 1 si,2 no"))//metodo para controlar la repeticion del ciclo

}

//elementos windows alert, prompt y ventana de confirmación

//ventana de confirmación
seguir2==true;
while (seguir2==true){
    console.log("Hola estoy adentro del ciclo");
    seguir2=confirm("Desea continuar ")//ventana de confirmacion confirm

}

