

interface Caracteristicas {
    altura: number,
    peso: number
}

const laura: Caracteristicas = {
    altura: 1.69,
    peso: 59 
}

const fernando: Caracteristicas = {
    altura: 1.80,
    peso: 78
}


function analisisMedico( descripcion: Caracteristicas[]):[number, number] {
    let volumen = 0;

    descripcion.forEach(({peso}) =>{
        volumen += peso;
    }) 

    return [volumen * 2.205, 100];

}


const personas = [laura];

const [ pesoEnLibras , cien  ]= analisisMedico(personas);

console.log( pesoEnLibras,'kgs');
console.log('peso estadounidense: ', pesoEnLibras ,'libras');
console.log(cien)