/* Obtener los documentos del documento HTML */
var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
var ancho = d.width;

var numeros = document.getElementById("numeros");
var boton = document.getElementById("boton");
boton.addEventListener("click", dibujoPorClic);


/* Declaración de funciones */

/* Función que permite dibujar una línea recta */

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClic()
{
    /* Líneas de código de JavaScript */

    var lineas = parseInt(numeros.value);
    var contador = 0;
    var componente_inicial, componente_final;
    var espacio = ancho / lineas;
    while(contador < lineas)
    {
        componente_inicial = espacio  * contador;
        componente_final = espacio  * (contador + 1);
        dibujarLinea("#242b63", 0, componente_inicial, componente_final, ancho);
        dibujarLinea("#242b63", componente_inicial, 0, ancho, componente_final);
        contador++;
    }

}


ancho_menos_1 = ancho-1;
dibujarLinea("black", 1,1,1,ancho_menos_1);
dibujarLinea("black", 1,ancho_menos_1,ancho_menos_1,ancho_menos_1);
dibujarLinea("black", 1,1,ancho_menos_1,1);
dibujarLinea("black", ancho_menos_1,1,ancho_menos_1,ancho_menos_1);