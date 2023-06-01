//1.acceder al formulario
let form=document.getElementById("formulario");//acceso al formulario
let fe1=document.querySelector("#numero .feedback")
let fenum=document.querySelector("#numero .feedback")

let fe2=document.querySelector("#nombre .feedback")
let fe3=document.querySelector("#apellido .feedback")
let fe4=document.querySelector("#numcel .feedback")
let validnum
let validnom
let validape
let validnumcel

//2. establecer reglas de validación
const $number=/^[0-9]{1,15}/ //toma numeros y tiene un rango de uno a quince
const $textos=/^[A-Za-zñÑáÁ]{10,50}/ //valida letras mayusculas minusculas ñ y carcateres tildados

//3.Validacion antes de enviar el formulario
 
form.numero.addEventListener('input',(e)=>{
    e.preventDefault();
    //console.log(e.target.value);//el metodo target accede a las propiedades del campo
    if ($number.test(e.target.value)) {//constante con el metodo test de las normas de regex
        form.numero.setAttribute("class","succes");
        fe1.style.setProperty("visibility", "hidden");
        fe1.style.setProperty("opacity", "0");
        validnum=true;

    }
    else {
        form.numero.setAttribute("class","error")
        fe1.textContent="Solo puede digitar valores numericos, su longitud debe ser minimo de 1"
        fe1.style.setProperty("visibility", "visible");
        fe1.style.setProperty("opacity", "1");
        validnum=false;
    }
})
form.nombre.addEventListener('input',(e)=>{
    e.preventDefault();
    //console.log(e.target.value)
    if($textos.test(e.target.value)){
        form.nombre.setAttribute("class","succes");
        fe2.style.setProperty("visibility","hidden");
        fe2.style.setProperty("opacity","0");
    }
    else{
        form.nombre.setAttribute("class","error");
        fe2.textContent="Tiene que tener 10 carcateres como minimo"
        fe2.style.setProperty("visibility","visible");
        fe2.style.setProperty("opacity","1");

    }
})
form.apellido.addEventListener('input',(e)=>{
    e.preventDefault();
    //console.log(e.target.value)
    if($textos.test(e.target.value)){
        form.apellido.setAttribute("class","succes");
        fe3.style.setProperty("visibility","hidden");
        fe3.style.setProperty("opacity","0");
    }
    else{
        form.apellido.setAttribute("class","error");
        fe3.textContent="Tiene que tener 10 carcateres como minimo"
        fe3.style.setProperty("visibility","visible");
        fe3.style.setProperty("opacity","1");

    }
})
form.numcel.addEventListener('input',(e)=>{
    e.preventDefault();
    //console.log(e.target.value);//el metodo target accede a las propiedades del campo
    if ($number.test(e.target.value)) {//constante con el metodo test de las normas de regex
        form.numcel.setAttribute("class","succes");
        fe4.style.setProperty("visibility", "hidden");
        fe4.style.setProperty("opacity", "0");

    }
    else {
        form.numcel.setAttribute("class","error")
        fe4.textContent="Solo puede digitar valores numericos, su longitud debe ser minimo de 1"
        fe4.style.setProperty("visibility", "visible");
        fe4.style.setProperty("opacity", "1");
    }
})
//4. validacion de campos vacios
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const numcel=form.numcel.value;
    const apellido=form.apellido.value;
    const numero=form.numero.value;
    const nombre=form.nombre.value;

    if (numcel==null || numcel==0){
        form.numcel.setAttribute("class","error")
        fe4.textContent="Campo vacio, digita tu número de celular"
        fe4.style.setProperty("visibility", "visible");
        fe4.style.setProperty("opacity", "1");
        form.numcel.focus();
    }
    else if (apellido==null || apellido==0){
        form.numcel.setAttribute("class","error")
        fe3.textContent="Campo vacio, digita tu apellido"
        fe3.style.setProperty("visibility", "visible");
        fe3.style.setProperty("opacity", "1");
        form.apellido.focus();

    }
    else if (nombre==null || nombre==0){
        form.nombre.setAttribute("class","error")
        fe2.textContent="Campo vacio, digita tu nombre"
        fe2.style.setProperty("visibility", "visible");
        fe2.style.setProperty("opacity", "1");
        form.nombre.focus();

    }
    else if (numero==null || numero==0 || validnum==false){
        form.numero.setAttribute("class","error")
        fenum.textContent="Campo vacio, digita tu numero de identificación"
        fenum.style.setProperty("visibility", "visible");
        fenum.style.setProperty("opacity", "1");
        form.numero.focus();

    }
    else{
        form.submit()
        alert ("datos enviados")
    }
})
