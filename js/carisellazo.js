let name,value,valueToBet,op,number2
op=1;
name=prompt("Digite su nombre");
value=parseInt(prompt("Digite el valor de su presupuesto para apostar"));

function generarAleatorio (){
    let number=parseInt(Math.random() * (3 - 1) + 1);
    return number;
}    
function ganar (v1){
    value=value+v1;
    alert (`, el valor que apostaste fue: ${valueToBet}, y tu valor con la ganancia es: ${value}`);
    return value;

}
function perder (v2){

    value=value-v2;    
    alert (`, el valor que apostaste fue: ${valueToBet}, y tu valor con la ganancia es: ${value}`);

}

while (op==1){
    valueToBet=parseInt(prompt("Digite el valor que quiere apostar en esta ronda"));
    if (valueToBet<=value){
        number2=parseInt(prompt("Escoga 1 para cara y 2 para sello"));
        if(generarAleatorio()==1 && number2==1){
            console.log (` ganaste con cara ${ganar(valueToBet)}`);
        }
        else if (generarAleatorio()==1 && number2==2){
            console.log (` perdiste con cara ${perder(valueToBet)}`);
        }
        else if (generarAleatorio()==2 && number2==2){
            console.log (` ganaste con sello ${ganar(valueToBet)}`);
        }
        else if (generarAleatorio()==2 && number2==1){
            console.log (` perdiste con sello ${perder(valueToBet)}`);
        }
    }
    else if(value==0) {
        op=parseInt(prompt("ya no puedes apostar, digita 2 para finalizar"));
    }
    op=parseInt(prompt(`digita 1 para seguir y 2 para finalizar`))
}


console.log(generarAleatorio())
/*console.log(name,value)
*/
