let btnmodal=document.getElementById("abrirModal");
let vtnmodal=document.getElementById("ventanaModal1");
let closemodal=document.querySelector(".cerrarModal");
btnmodal.addEventListener("click",()=>{
    vtnmodal.style.display="block";
})
function cerrar(){
    vtnmodal.style.display="none";
}