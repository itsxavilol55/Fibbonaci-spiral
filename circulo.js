var canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
fibbo = [0,1,1,2,3,5,8,13,21,34,55,89,144,233];
// 0,1,2
let radio = 0;
let cont = 1;
let escala = 10;
let coorX =1000;
let coorY =1000;
for (var i = 2; i <14; i++) 
{
	radio = fibbo[i]*escala;
	if(i==2)//cuadro inicial
	{
		ctx.beginPath();
		ctx.arc(coorX, coorY, radio, 0, Math.PI/2, false); // centro X, centrp Y, radio, angulo inicial, angulo final, sentido
		ctx.strokeRect(coorX, coorY,radio, radio);
		ctx.stroke();
		ctx.closePath();
		//cuadrado inicial
	}
	if(cont == 1)
	{ 
		ctx.beginPath();
		ctx.arc(coorX, coorY, radio, 0, -Math.PI/2, true); 
		ctx.strokeRect(coorX, coorY,radio, -radio);
		ctx.stroke();
		ctx.closePath();
		coorY += fibbo[i-1]*escala;
	}
	else if(cont == 2)
	{ 
		ctx.beginPath();
		ctx.arc(coorX, coorY, radio, -Math.PI/2, Math.PI/1,true); // centro X, centrp Y, radio, angulo inicial, angulo final, sentido
		ctx.strokeRect(coorX, coorY,-radio, -radio);
		ctx.stroke();
		ctx.closePath();
		coorX += fibbo[i-1]*escala;
	}
	else if(cont == 3)
	{ 
		ctx.beginPath();
		ctx.arc(coorX, coorY, radio, Math.PI, Math.PI*0.5,true); // centro X, centrp Y, radio, angulo inicial, angulo final, sentido
		ctx.strokeRect(coorX, coorY,-radio, radio);
		ctx.stroke();
		ctx.closePath();
		coorY -= fibbo[i-1]*escala;
	}
	else if(cont == 4)
	{ 
		ctx.beginPath();
		ctx.arc(coorX, coorY, radio, Math.PI*0.5, 0,true); // centro X, centrp Y, radio, angulo inicial, angulo final, sentido
		ctx.strokeRect(coorX, coorY,radio, radio);
		ctx.stroke();
		ctx.closePath();
		coorX -= fibbo[i-1]*escala;
		cont =0;
	}
	cont++;
}
