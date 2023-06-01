let btn=document.getElementById("but")
btn.onclick=function calcular(e){
    //evitar propagacion de un evento
    e.preventDefault()
    //entradas
    let num1=parseInt(document.getElementById("_num1").value)//tomar el dato que se ingresa
    let num2=parseInt(document.getElementById("_num2").value)
    let op=parseInt(document.getElementById("op").value)

    switch(op){
        case 1:
            let suma=num1+num2
            alert( `La suma entre ${num1} y ${num2} es ${suma}`)
            break;
        
        case 2:
            let resta=num1-num2
            //acceder al div resultado
            let res=document.querySelector(".resultado")
            let re=document.createElement("p")
            re.innerHTML=`<p>La resta entre ${num1} y ${num2} es ${resta} </p>`
            res.appendChild(re)
            break;
        
        case 3:
            let multi=num1*num2
            let mul=document.querySelector(".resultado")
            let mu=document.createElement("p")
            mu.innerHTML=`<p>La multiplicación entre ${num1} y ${num2} es ${multi}</p>`
            mul.appendChild(mu)
            break;

        case 4:
            let divi=num1/num2
            let div=document.querySelector(".resultado")
            let di=document.createElement("p")
            di.innerHTML=`<p>La división entre ${num1} y ${num2} es ${divi}</p>`
            div.appendChild(di)
    }
   // console.log(`El numero 1 es ${num1} el dos es ${num2} y la operacion es ${op}`)
    
}