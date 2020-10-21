
export var valores = [true, 5, false, "hola", "adios", 2];

// if(valores[3].length > valores[4].length){
//     console.log(`El datos mayor es ${valores[3]}`)
// }else{
//     console.log(`El mayor es ${valores[4]}`)
// }


if (valores[0] === true) {
    console.log(true);
} else if (valores[2] === false) {
    console.log(false);
}


function sumar() {
    return 20 + 10;
}

function restar() {
    return 20 - 10;
}

export const aritmetica = {
    sumar,
    restar
}


export default function saludar() {
    return console.log("hola a todos");
}


export class Sergio {
    constructor(nombre) {
        this.nombre = nombre
        //console.log(nombre);
    }

    get getNombre() {
        return this.nombre;
    }

    set setNombre(nombre) {
        return this.nombre = nombre;
    }


}



