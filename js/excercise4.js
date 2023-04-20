let typeDocument,numberDocument,name,lastName,op,change,op2;
op2=1;
while (op2==1){
op=parseInt(prompt("digite 1 para ingresar estudiante, dos para ver un estudiante y tres para modificar"));
switch (op){
    case 1:
        name=prompt(`Digite el nombre del estudiante`);
        lastName=prompt(`Digite el apellido del estudiante`);
        typeDocument=prompt(`Digite el tipo de documento del estudiante`);
        numberDocument=prompt(`Digite el numero de documento del estudiante`);

        break;
    case 2:
        if (name!=NaN && lastName!=NaN && typeDocument!=NaN && numberDocument!=NaN) {
            op=parseInt(prompt(`No hay un estudiante registrado, digite 1 para registrarlo`));
        } else {
            alert(`El estudiante ${name} ${lastName} con ${typeDocument}, su numero de documento es ${numberDocument}`);
        }

        break;
    case 3:
        if (name!=NaN && lastName!=NaN && typeDocument!=NaN && numberDocument!=NaN) {
            op=parseInt(prompt(`No hay un estudiante registrado, digite 1 para registrarlo`));
        } else {
            change=parseInt(prompt(`Digite 1 si quiere cambiar el nombre,2 para cambiar el apellido, 3 para cambiar el tipo de documento y 4 para cambiar el numero de documento`));
            if (change===1) {
                name=prompt(`Digite el nombre nuevamente`);
                alert(`El estudiante ${name} ${lastName} con ${typeDocument}, su numero de documento es ${numberDocument}`);
            } else if(change===2) {
                lastName=prompt(`Digite el apellido nuevamente`);
                alert(`El estudiante ${name} ${lastName} con ${typeDocument}, su numero de documento es ${numberDocument}`);
            } else if(change===3) {
                typeDocument=prompt(`Digite el tipo de documento nuevamente`);
                alert(`El estudiante ${name} ${lastName} con ${typeDocument}, su numero de documento es ${numberDocument}`);
            } else if(change===4) {
                numberDocument=prompt(`Digite el numero de documento nuevamente`);
                alert(`El estudiante ${name} ${lastName} con ${typeDocument}, su numero de documento es ${numberDocument}`);
            }
        }

        break;

        default:
            alert=(`error`);
}
            op2=prompt(`Quieres volver a empezar el proceso?, digite 1 para si y dos para no`)
}