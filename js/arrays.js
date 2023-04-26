//crear un array
//primero crear variables
let onces=["empanada","tamal"]

//imprimir el array, funciona solo por consola

console.log(onces);

//acceder a un elemento del array

console.log(onces[1])//acceder a la posicion del array

console.log(onces[onces.lenght-1])//ver la ultima posicion del array, propiedad lenght pára la extension del array

//recorre array

onces.forEach(function(/*valor*/valor,/*posicion */posicion,array){//el primeros es valor o value, posicion se llama index
    console.log(`en la posicion ${posicion} hay ${valor}`)
})

//añadir elementos al final del array

onces.push("jugo","gaseosa","pan");
console.log(onces);

//eliminar el ultimo elemento del array

onces.pop()
console.log(onces)

//añadir elemento al inicio del array

onces.unshift("jugo de mora")
console.log(onces)

//eliminar el primer elemento del array

onces.shift()
console.log(onces)

//eliminar de una posicion en especifico

onces.splice(/*posicion de la que se va a borrar */0,/*posicion hasta la que se quiere borrar */1)
console.log(onces)

// metodo de busqueda filter
// se filtra a partir de una condicion generando un nuevo array a partir de este
// se diferencia de find porque filter enlista todas las coincidencias

let busqueda1=onces.filter(onces=>onces=="tamal")
console.log(busqueda1)
    
//metodo de busqueda find
//solo va a tomar el primer dato sin tener en cuenta el resto de coincidencias

let busqueda2=onces.find(onces=>onces=="jugo de mora")
console.log(busqueda2)