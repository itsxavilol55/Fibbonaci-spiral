// Obtener el elemento canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Serie de Fibonacci
const fibbo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233];

// Parámetros iniciales
let radio = 0;
let cont = 1;
let escala = 10;
let coorX = 1000;
let coorY = 1000;

// Dibujar cada cuadrado y arco
for (let i = 2; i < 14; i++) {
    // Calcular el radio
    radio = fibbo[i] * escala;

    // Dibujar el arco
    if (cont == 1) {
        ctx.beginPath();
        ctx.arc(coorX, coorY, radio, 0, -Math.PI / 2, true);
        ctx.stroke();
        ctx.closePath();
        coorY += fibbo[i - 1] * escala;
    } else if (cont == 2) {
        ctx.beginPath();
        ctx.arc(coorX, coorY, radio, -Math.PI / 2, Math.PI, true);
        ctx.stroke();
        ctx.closePath();
        coorX += fibbo[i - 1] * escala;
    } else if (cont == 3) {
        ctx.beginPath();
        ctx.arc(coorX, coorY, radio, Math.PI, Math.PI * 0.5, true);
        ctx.stroke();
        ctx.closePath();
        coorY -= fibbo[i - 1] * escala;
    } else if (cont == 4) {
        ctx.beginPath();
        ctx.arc(coorX, coorY, radio, Math.PI * 0.5, 0, true);
        ctx.stroke();
        ctx.closePath();
        coorX -= fibbo[i - 1] * escala;
        cont = 0;
    }

    // Dibujar el cuadrado inicial
    if (i == 2) {
        ctx.beginPath();
        ctx.strokeRect(coorX, coorY, radio, radio);
        ctx.stroke();
        ctx.closePath();
    }

    cont++;
}
