let username,password;
username=prompt("Ingrese su nombre de usuario");
password=prompt("Ingrese su contraseña");
if (username==="michi" && password==="michi150904") {
    alert(`Bienvenido a mi APP`);
} else if(username==="michi" && password !=="michi150904") {
    alert(`Upps! parece que tus datos de acceso son incorrectos`);
} else if(username!=="michi" && password ==="michi150904") {
    alert(`Nombre de usuario invalido`);
} else {
    alert(`Acceso denegado`);
}