var sacha = {
    nombre: 'sacha',
    apellido: 'Lifszyc',
    edad: 28
}

var dario = {
    nombre: 'darío',
    apellido: 'Susnisky',
    edad: 27
}

function imprimirNombreEnMayusculas(persona){
    //var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

function imprimirEdadYNombre(persona){
    var { nombre } = persona
    var firstLetterUpperCase = nombre.charAt(0).toUpperCase() + nombre.substr(1,nombre.length)
    var { edad } = persona
    console.log('Hola, me lllamo '+ firstLetterUpperCase + ' y tengo ' + edad + ' años')
}

imprimirNombreEnMayusculas(sacha)

imprimirNombreEnMayusculas(dario)

imprimirEdadYNombre(sacha)

imprimirEdadYNombre(dario)
//imprimirNombreEnMayusculas({nombre: 'pepito' })

function cumpleanos(persona) {
    return{
        ...persona,
        edad: persona.edad + 1
    }
}

