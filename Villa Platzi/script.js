var canvas = document.getElementById("canvas");
var papel = canvas.getContext("2d");
var cantidadVacas = aleatorio(0, 10);
var cantidadPollos = aleatorio(0, 7);
var cantidadCerdos = aleatorio(0, 5);

/* Fondo */
var fondo = {
    URL: "img/tile.png",
    CARGA: false
}

fondo.IMAGE = new Image();
fondo.IMAGE.src = fondo.URL;
fondo.IMAGE.addEventListener("load", cargarFondo);

/* Vaca */
var vaca = {
    URL: "img/vaca.png",
    CARGA: false
}

vaca.IMAGE = new Image();
vaca.IMAGE.src = vaca.URL;
vaca.IMAGE.addEventListener("load", cargarVacas);

/* Pollo */
var pollo = {
    URL: "img/pollo.png",
    CARGA: false
}

pollo.IMAGE = new Image();
pollo.IMAGE.src = pollo.URL;
pollo.IMAGE.addEventListener("load", cargarPollos);

/* Cerdo */
var cerdo = {
    URL: "img/cerdo.png",
    CARGA: false
}

cerdo.IMAGE = new Image();
cerdo.IMAGE.src = cerdo.URL;
cerdo.IMAGE.addEventListener("load", cargarCerdo);

/*---------------------Funciones------------------*/
function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

function cargarFondo()
{
    fondo.CARGA = true;
    dibujar();
}

function cargarVacas()
{
    vaca.CARGA = true;
    dibujar();
}

function cargarPollos(){
    pollo.CARGA = true;
    dibujar();
}

function cargarCerdo(){
    cerdo.CARGA = true;
    dibujar();
}

function dibujar(){

    if(fondo.CARGA)
    {
        papel.drawImage(fondo.IMAGE, 0, 0);
    }

    if(vaca.CARGA)
    {
        for(var v=0; v<cantidadVacas; v++)
        {
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5);
            var x = x * 80;
            var y = y * 80;

            papel.drawImage(vaca.IMAGE, x, y);

        }
        
    }

    if(pollo.CARGA)
    {
        for(var p=0; p<cantidadPollos; p++)
        {
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5);
            var x = x * 80;
            var y = y * 80;

            papel.drawImage(pollo.IMAGE, x, y);

        }
        
    }

    if(cerdo.CARGA)
    {
        for(var c=0; c<cantidadCerdos; c++)
        {
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5);
            var x = x * 80;
            var y = y * 80;

            papel.drawImage(cerdo.IMAGE, x, y);

        }
        
    }

}