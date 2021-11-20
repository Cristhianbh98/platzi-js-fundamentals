/* ---------------------Variables utilizadas------------------ */

var canvas = document.getElementById("canvas");
var papel = canvas.getContext("2d");
var ancho = canvas.width;
var x, y;
var estado = 0 ;

/* ---------------------Eventos------------------ */

document.addEventListener("keyup", drawKeyboard);

document.addEventListener("mousedown", mouseClick);

document.addEventListener("mouseup", mouseNotClick);

document.addEventListener("mousemove", mouseMove);

/* ---------------------Funciones------------------ */
//Saber si el mouse está precionado

function mouseClick(event_mouseClick){
    estado = 1; //Clic precionado
}

function mouseNotClick(event_mouseNotClick){
    estado = 0; //Clic soltado
}

//Dibujar con el mouse

function mouseMove(event_mouseMove){
    var color = "blue";
    var pos = getMousePosition(event_mouseMove);
    if(estado == 1)
    {
        drawLine(color, pos.X, pos.Y, pos.X + 0.1, pos.Y + 0.1, papel);
    }
    
}

//Obtener posicion relativa al canvas

function getMousePosition(event_mouseMove)
{
    
    var position = canvas.getBoundingClientRect();
    
    return {
      X: event_mouseMove.clientX - position.left,
      Y: event_mouseMove.clientY - position.top
    };
}

// Dibujar una linea 

function drawLine(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

/* ---------------------Dibujar el contorno------------------ */

var ancho_menos_1 = ancho - 1;
drawLine("black", 1,1,1,ancho_menos_1, papel);
drawLine("black", 1,ancho_menos_1,ancho_menos_1,ancho_menos_1, papel);
drawLine("black", 1,1,ancho_menos_1, 1, papel);
drawLine("black", ancho_menos_1,1,ancho_menos_1,ancho_menos_1, papel);



/* Versión con teclado */

/* Declaración de Objetos */
var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40 
};

// Dibujar por teclado
function drawKeyboard(event){

    var color = "brown";
    var movimiento = 5;
    switch(event.keyCode)
    {
        case teclas.UP:

            drawLine(color, x, y, x, y - movimiento, papel);
            y = y -movimiento;

        break;

        case teclas.LEFT:

            drawLine(color, x, y, x - movimiento, y, papel);
            x = x - movimiento;

        break;

        case teclas.RIGHT:

            drawLine(color, x, y, x + movimiento, y, papel);
            x = x + movimiento;

        break;

        case teclas.DOWN:

            drawLine(color, x, y, x, y + movimiento, papel);
            y = y + movimiento;

        break;

        default:
            console.log("No hace nada");
        break;

    }

}